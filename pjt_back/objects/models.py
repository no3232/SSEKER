from django.db import models
from django.conf import settings


class Part(models.Model):
    part = models.IntegerField()


class Campus(models.Model):
    title = models.CharField(max_length=255)
    partcount = models.IntegerField(default=1)


class BaekJoonLevel(models.Model):
    level = models.CharField(max_length=255)


class SkillCategory(models.Model): 
    category = models.CharField(max_length=255)


class Skill(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name='skill')


class Language(models.Model):
    title = models.CharField(max_length=255)


class Track(models.Model):
    track = models.CharField(max_length=255)