from objects.models import Part, Campus, Skill, SkillCategory

from django.db import models
from django.conf import settings


class Status(models.Model):
    status = models.CharField(max_length=255, default="마감")


class Project(models.Model):
    status = models.OneToOneField(Status, on_delete=models.CASCADE)
    founder = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='founder')
    campus = models.OneToOneField(Campus, on_delete=models.CASCADE)
    part = models.OneToOneField(Part, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    skill = models.ManyToManyField(Skill)


class Participant(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='participant')
    skillcategory = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)
    manager = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, on_delete=models.CASCADE, related_name='manager')


class Applicant(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='applicant')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    skillcategory = models.ForeignKey(SkillCategory, on_delete=models.CASCADE)