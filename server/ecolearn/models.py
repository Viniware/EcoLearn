from django.db import models
from django.contrib.auth.models import AbstractUser

class RoleEnum(models.TextChoices):
        ADMIN = "Admin", "Admin"
        USER = "User", "User"
        MODERATOR = "Moderator", "Moderator"

class Article(models.Model):
    text = models.TextField(max_length=10000)
    date = models.DateField()
    points = models.IntegerField()
    public = models.BooleanField(default=False)
    title = models.CharField(max_length=300)

    def __str__(self):
        return self.title

class MyUser(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    level = models.IntegerField(default=1)
    role = models.CharField(
        max_length=50,
        choices=RoleEnum.choices,
        default=RoleEnum.USER,
    )
    
    def __str__(self):
        return self.username

class Comment(models.Model):
    text = models.TextField(max_length=10000)
    upvote = models.IntegerField()
    downvote = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)
    article = models.ForeignKey(to=Article, on_delete=models.CASCADE)

    def __str__(self):
        return f'Comment by {self.user} in {self.article} at {self.date} - {self.time}' 

class Quiz(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(max_length=1000)
    date = models.DateField()
    total_points = models.IntegerField()
    article = models.ForeignKey(to=Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class UserQuiz(models.Model):
    user = models.ForeignKey(to=MyUser, on_delete=models.CASCADE)
    quiz = models.ForeignKey(to=Quiz, on_delete=models.CASCADE)
    completion_date = models.DateField()

    def __str__(self):
        return f'{self.user} - {self.quiz} - {self.completion_date}'

class Question(models.Model):
    text = models.TextField(max_length=5000)
    quiz = models.ForeignKey(to=Quiz, on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Choice(models.Model):
    question = models.ForeignKey(to=Question, on_delete=models.CASCADE)
    correct = models.BooleanField()
    text = models.CharField(max_length=500)

    def __str__(self):
        return self.text