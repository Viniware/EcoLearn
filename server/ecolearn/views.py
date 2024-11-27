from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import MyUser, Article, Comment, Quiz, UserQuiz, Question, Choice, Section
from .serializer import (
    MyUserSerializer, ArticleSerializer, CommentSerializer, 
    QuizSerializer, UserQuizSerializer, QuestionSerializer, ChoiceSerializer, SectionSerializer
)
from datetime import date
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated

class MyUserViewSet(viewsets.ModelViewSet):
    queryset = MyUser.objects.all()
    serializer_class = MyUserSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    @action(detail=True, methods=['patch'])
    def toggle_public(self, request, pk=None):
        article = self.get_object()
        article.public = not article.public
        article.save()
        return Response({'status': 'public status updated', 'public': article.public})

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    @action(detail=True, methods=['patch'])
    def upvote(self, request, pk=None):
        comment = self.get_object()
        comment.upvote += 1
        comment.save()
        return Response({'status': 'upvoted', 'upvote_count': comment.upvote})

    @action(detail=True, methods=['patch'])
    def downvote(self, request, pk=None):
        comment = self.get_object()
        comment.downvote += 1
        comment.save()
        return Response({'status': 'downvoted', 'downvote_count': comment.downvote})

    @action(detail=False, methods=['get'])
    def by_article(self, request):
        """Get all comments for a specific article."""
        article_id = request.query_params.get('article_id')
        if not article_id:
            return Response({'error': 'article_id parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        comments = Comment.objects.filter(article_id=article_id)
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data)

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    @action(detail=True, methods=['post'])
    def answer(self, request, pk=None):
        """Submit answers for a quiz."""
        
        
        quiz = self.get_object()
        answers = request.data.get('answers', {})
        correct_choices = Choice.objects.filter(
            question__quiz=quiz, correct=True
        ).values_list('id', flat=True)
        
        # Calculate points
        user_points = sum(1 for answer_id in answers if int(answer_id) in correct_choices)

        # Create the UserQuiz record for the authenticated user
        UserQuiz.objects.create(
            user=request.user,  # Ensure this is the logged-in user
            quiz=quiz,
            completion_date=date.today()
        )

        return Response({
            'status': 'quiz completed',
            'points_scored': user_points,
            'total_points': quiz.total_points,
        })

class UserQuizViewSet(viewsets.ModelViewSet):
    queryset = UserQuiz.objects.all()
    serializer_class = UserQuizSerializer

    @action(detail=True, methods=['get'])
    def user_results(self, request, pk=None):
        """Get the quiz results for a specific user."""
        user_quiz = self.get_object()
        results = {
            'user': user_quiz.user.username,
            'quiz': user_quiz.quiz.name,
            'completion_date': user_quiz.completion_date,
        }
        return Response(results)
    
    @action(detail=False, methods=['get'])
    def user_quizzes_for_section(self, request, section_id=None):
        """Fetch UserQuizzes for a given section"""
        user = request.user  # Get the currently logged-in user
        user_quizzes = UserQuiz.objects.filter(user=user, quiz__section_id=section_id)
        serializer = UserQuizSerializer(user_quizzes, many=True)
        return Response(serializer.data)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(detail=True, methods=['get'])
    def choices(self, request, pk=None):
        """Get all choices for a specific question."""
        question = self.get_object()
        choices = Choice.objects.filter(question=question)
        serializer = ChoiceSerializer(choices, many=True)
        return Response(serializer.data)

class ChoiceViewSet(viewsets.ModelViewSet):
    queryset = Choice.objects.all()
    serializer_class = ChoiceSerializer

# Section ViewSet - CRUD and custom actions
class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

    # Custom Action: Toggle Active Status of Section
    @action(detail=True, methods=['patch'])
    def toggle_active(self, request, pk=None):
        section = self.get_object()
        section.active = not section.active
        section.save()
        return Response({'status': 'active status updated', 'active': section.active})

    # Custom Action: Assign article to section
    @action(detail=True, methods=['post'])
    def assign_article(self, request, pk=None):
        section = self.get_object()
        article_id = request.data.get('article_id')
        try:
            article = Article.objects.get(id=article_id)
            article.section = section
            article.save()
            return Response({'status': 'article assigned to section'})
        except Article.DoesNotExist:
            return Response({'error': 'Article not found'}, status=status.HTTP_404_NOT_FOUND)

    # Custom Action: Get all articles for a specific section
    @action(detail=True, methods=['get'])
    def articles(self, request, pk=None):
        section = self.get_object()
        articles = Article.objects.filter(section=section)
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
