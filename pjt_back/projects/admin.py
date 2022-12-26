from django.contrib import admin

from .models import Project, Participant, Applicant, Status

admin.site.register(Status)
admin.site.register(Project)
admin.site.register(Applicant)
admin.site.register(Participant)
