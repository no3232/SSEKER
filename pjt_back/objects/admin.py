from .models import Campus, Track, BaekJoonLevel, SkillCategory, Skill, Language

from django.contrib import admin


admin.site.register([Campus, Track, BaekJoonLevel, SkillCategory, Skill, Language])
