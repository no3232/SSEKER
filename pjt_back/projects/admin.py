from django.contrib import admin

from .models import Skill,Project, Campus, Participant, SkillCategory, Applicant, Status

admin.site.register(Skill)
admin.site.register(Status)
admin.site.register(Campus)
admin.site.register(Project)
admin.site.register(Applicant)
admin.site.register(Participant)
admin.site.register(SkillCategory)