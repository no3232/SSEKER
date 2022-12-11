from django.contrib import admin

from .models import Skill,Project, Location, Participant, SkillCategory, Applicant

admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Location)
admin.site.register(Applicant)
admin.site.register(Participant)
admin.site.register(SkillCategory)