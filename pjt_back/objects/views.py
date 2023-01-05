from .models import Campus, BaekJoonLevel, SkillCategory, Skill, Language, Track
from .serializers import CampusSerializer, TrackSerializer, BaekJoonLevelSerializer, SkillCategorySerializer, SkillSerializer, LanguageSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def objects(request):
    skill          = SkillSerializer(Skill.objects.all(), many=True)
    track          = TrackSerializer(Track.objects.all(), many=True)
    campus         = CampusSerializer(Campus.objects.all(), many=True)
    language       = LanguageSerializer(Language.objects.all(), many=True)
    baekjoonlevel  = BaekJoonLevelSerializer(BaekJoonLevel.objects.all(), many=True)
    skill_category = SkillCategorySerializer(SkillCategory.objects.all(), many=True)
    
    context = { 
        'skill'         : skill.data,
        'track'         : track.data,
        'campus'        : campus.data,
        'language'      : language.data,
        'baekjoonlevel' : baekjoonlevel.data,
        'skill_category': skill_category.data,
    }
    return Response(context)

@api_view(['GET'])
def get_skill_language(request):
    skills = SkillSerializer(Skill.objects.all(), many=True).data
    languages = LanguageSerializer(Language.objects.all(), many=True).data
    
    json_list = []
    for skill in skills:
        temp_skill = {skill['title']: skill}
        json_list.append(temp_skill)
    for language in languages:
        temp_language = {language['title']: language}
        json_list.append(temp_language)
    return Response(json_list)