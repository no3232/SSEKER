from django.db import models
from django.conf import settings

class Location(models.Model):
    campus = models.CharField(max_length=255)


class SkillCategory(models.Model):
    category = models.CharField(max_length=255)


class Skill(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)


class Project(models.Model):
    founder = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='founder')
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=5000)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)


class Participant(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='participant')
    skillcategory = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)
    manager = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.CASCADE, related_name='manager')


class Applicant(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='applicant')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    skillcategory = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)