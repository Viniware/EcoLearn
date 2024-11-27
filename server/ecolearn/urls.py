from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    MyUserViewSet, ArticleViewSet, CommentViewSet, 
    QuizViewSet, UserQuizViewSet, QuestionViewSet, ChoiceViewSet
)

router = DefaultRouter()
router.register(r'users', MyUserViewSet, basename='user')
router.register(r'articles', ArticleViewSet, basename='article')
router.register(r'comments', CommentViewSet, basename='comment')
router.register(r'quizzes', QuizViewSet, basename='quiz')
router.register(r'user-quizzes', UserQuizViewSet, basename='userquiz')
router.register(r'questions', QuestionViewSet, basename='question')
router.register(r'choices', ChoiceViewSet, basename='choice')

urlpatterns = [
    path('', include(router.urls)),
]
