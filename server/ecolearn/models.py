from django.db import models
from django.contrib.auth.models import AbstractUser

class RoleEnum(models.TextChoices):
    ADMIN = "Admin", "Admin"
    USER = "User", "User"
    MODERATOR = "Moderator", "Moderator"

class Section(models.Model):
    # Model to represent different sections of articles (e.g., "Beginner's Section")
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.name

class Article(models.Model):
    # Article model with a ForeignKey to Section
    text = models.TextField(max_length=10000)
    date = models.DateField()
    points = models.IntegerField()
    public = models.BooleanField(default=False)
    title = models.CharField(max_length=300)

    # Foreign key to link article to a section
    section = models.ForeignKey(Section, related_name='articles', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class MyUser(AbstractUser):
    # Custom user model with specific roles and permissions
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    level = models.IntegerField(default=1)
    role = models.CharField(
        max_length=50,
        choices=RoleEnum.choices,
        default=RoleEnum.USER,
    )

    # Adding related_name to avoid clash with default User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='myuser_set',  # Custom related_name
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='myuser_set',  # Custom related_name
        blank=True,
    )
    
    def __str__(self):
        return self.username

class Comment(models.Model):
    # Comment model with ForeignKey to Article and MyUser
    text = models.TextField(max_length=10000)
    upvote = models.IntegerField()
    downvote = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE, related_name='comments')
    article = models.ForeignKey(to=Article, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f'Comment by {self.user} in {self.article} at {self.date} - {self.time}'

class Quiz(models.Model):
    # Quiz model related to Article
    name = models.CharField(max_length=300)
    description = models.TextField(max_length=1000)
    date = models.DateField()
    total_points = models.IntegerField()
    article = models.ForeignKey(to=Article, on_delete=models.CASCADE, related_name='quizzes')

    def __str__(self):
        return self.name

class UserQuiz(models.Model):
    # User's attempt at a Quiz
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE, related_name='user_quizzes')
    quiz = models.ForeignKey(to=Quiz, on_delete=models.CASCADE, related_name='user_quizzes')
    completion_date = models.DateField()

    def __str__(self):
        return f'{self.user} - {self.quiz} - {self.completion_date}'

class Question(models.Model):
    # Question related to a Quiz
    text = models.TextField(max_length=5000)
    quiz = models.ForeignKey(to=Quiz, on_delete=models.CASCADE, related_name='questions')

    def __str__(self):
        return self.text

class Choice(models.Model):
    # Choices for each Question in the Quiz
    question = models.ForeignKey(to=Question, on_delete=models.CASCADE, related_name='choices')
    correct = models.BooleanField()
    text = models.CharField(max_length=500)

    def __str__(self):
        return self.text
