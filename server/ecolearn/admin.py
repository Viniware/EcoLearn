from django.contrib import admin
from .models import MyUser, Article, Comment, Quiz, UserQuiz, Question, Choice

# Register MyUser model with custom settings
@admin.register(MyUser)
class MyUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'name', 'role', 'level')  # Display these fields in the list view
    search_fields = ('username', 'email', 'name')  # Allow search by these fields
    list_filter = ('role', 'level')  # Allow filtering by role and level
    ordering = ('username',)  # Default ordering by username

# Register Article model
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'points', 'public')  # Display these fields in the list view
    search_fields = ('title', 'text')  # Allow search by title and text
    list_filter = ('public', 'date')  # Allow filtering by public and date
    ordering = ('-date',)  # Default ordering by date (newest first)

# Register Comment model
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('article', 'user', 'text', 'upvote', 'downvote', 'date', 'time')  # Display these fields
    search_fields = ('text', 'user__username')  # Allow search by comment text and username
    list_filter = ('upvote', 'downvote', 'article')  # Allow filtering by upvote, downvote, and article
    ordering = ('-date', '-time')  # Default ordering by date and time

# Register Quiz model
@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'date', 'total_points', 'article')  # Display these fields
    search_fields = ('name', 'description')  # Allow search by name and description
    list_filter = ('date', 'article')  # Allow filtering by date and article
    ordering = ('-date',)  # Default ordering by date

# Register UserQuiz model
@admin.register(UserQuiz)
class UserQuizAdmin(admin.ModelAdmin):
    list_display = ('user', 'quiz', 'completion_date')  # Display these fields
    search_fields = ('user__username', 'quiz__name')  # Allow search by username and quiz name
    list_filter = ('completion_date',)  # Allow filtering by completion date
    ordering = ('-completion_date',)  # Default ordering by completion date

# Register Question model
@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'quiz')  # Display these fields
    search_fields = ('text',)  # Allow search by question text
    list_filter = ('quiz',)  # Allow filtering by quiz
    ordering = ('quiz',)  # Default ordering by quiz

# Register Choice model
@admin.register(Choice)
class ChoiceAdmin(admin.ModelAdmin):
    list_display = ('text', 'correct', 'question')  # Display these fields
    search_fields = ('text',)  # Allow search by choice text
    list_filter = ('correct', 'question')  # Allow filtering by correct answer and question
    ordering = ('question',)  # Default ordering by question
