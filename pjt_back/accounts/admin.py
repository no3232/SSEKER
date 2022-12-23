from django.contrib import admin

from .models import User, Part, Track, BaekJoonLevel


admin.site.register(User)
admin.site.register(Part)
admin.site.register(Track)
admin.site.register(BaekJoonLevel)