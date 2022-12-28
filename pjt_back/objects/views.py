from .models import Part, Campus, BaekJoonLevel, SkillCategory, Skill, Language, Track
from .serializers import CampusSerializer, PartSerializer, TrackSerializer, BaekJoonLevelSerializer, SkillCategorySerializer, SkillSerializer, LanguageSerializer

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def objects(request):
    part           = PartSerializer(Part.objects.all(), many=True)
    skill          = SkillSerializer(Skill.objects.all(), many=True)
    track          = TrackSerializer(Track.objects.all(), many=True)
    campus         = CampusSerializer(Campus.objects.all(), many=True)
    language       = LanguageSerializer(Language.objects.all(), many=True)
    baekjoonlevel  = BaekJoonLevelSerializer(BaekJoonLevel.objects.all(), many=True)
    skill_category = SkillCategorySerializer(SkillCategory.objects.all(), many=True)
    
    context = { 
        'part'          : part.data,
        'skill'         : skill.data,
        'track'         : track.data,
        'campus'        : campus.data,
        'language'      : language.data,
        'baekjoonlevel' : baekjoonlevel.data,
        'skill_category': skill_category.data,
    }
    return Response(context)