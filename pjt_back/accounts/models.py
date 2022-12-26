from objects.models import Campus, Part, Track, Skill, BaekJoonLevel, Language, Track

from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    campus = models.OneToOneField(Campus, blank=True, null=True, on_delete=models.CASCADE)
    part = models.OneToOneField(Part, blank=True, null=True, on_delete=models.CASCADE)
    skill = models.ManyToManyField(Skill, blank=True)
    github = models.CharField(max_length=300, blank=True, null=True)
    blog = models.CharField(max_length=300, blank=True, null=True)
    level = models.OneToOneField(BaekJoonLevel, blank=True, null=True, on_delete=models.CASCADE)
    track = models.OneToOneField(Track, blank=True, null=True, on_delete=models.CASCADE)
    language = models.ManyToManyField(Language, blank=True)
    introduce = models.CharField(max_length=300, blank=True, null=True) 