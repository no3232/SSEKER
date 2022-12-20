from django.db import models
from django.contrib.auth.models import AbstractUser
from projects.models import Skill as Skill
from projects.models import Location as Location


class User(AbstractUser):
    followings = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='followers')
    location = models.ForeignKey(Location, blank=True, null=True, on_delete=models.CASCADE)
    introduce = models.CharField(max_length=300, blank=True, null=True)
    skill = models.ManyToManyField(Skill, blank=True)
    github = models.CharField(max_length=300, blank=True, null=True)
    blog = models.CharField(max_length=300, blank=True, null=True)