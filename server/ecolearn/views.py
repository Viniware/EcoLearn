from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import MyUser, Article, Comment, Quiz, UserQuiz, Question, Choice
from .serializer import (
    MyUserSerializer, ArticleSerializer, CommentSerializer, 
    QuizSerializer, UserQuizSerializer, QuestionSerializer, ChoiceSerializer
)
from datetime import date

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
        user_points = sum(1 for answer_id in answers if int(answer_id) in correct_choices)

        UserQuiz.objects.create(
            user=request.user, quiz=quiz, completion_date=date.today()
        )

        return Response({
            'status': 'quiz completed',
            'points_scored': user_points,
            'total_points': quiz.total_points,
        })

    @action(detail=True, methods=['get'])
    def questions(self, request, pk=None):
        """Get all questions for a specific quiz."""
        quiz = self.get_object()
        questions = Question.objects.filter(quiz=quiz)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data)

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

