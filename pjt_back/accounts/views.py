from .models import User
from .serializers import UserListSerializer, UserSerializer
from projects.models import SkillCategory as SkillCategory
from projects.models import Skill as Skill

from django.db.models import Q
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST','GET', 'PUT', 'DELETE'])
def people(request, username):
    user = User.objects.get(username=username)
    if request.method == 'POST':
        serialzer = UserSerializer(data=request.data)
        if serialzer.is_valid():
            serialzer.save(user=request.user)
    elif request.method == 'GET':
        serialzer = UserListSerializer(user)
    elif request.method == 'PUT':
        serialzer = UserSerializer(user, data=request.data)
        if serialzer.is_valid():
            serialzer.save(user=request.user)
        else:
            print(serialzer.errors)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serialzer.data ,status=status.HTTP_200_OK)


@api_view(['GET',])
def peoples(request, skill_category=None):
    if skill_category:
        temp_people = []
        skill_category = SkillCategory.objects.filter(category=skill_category)
        for category in skill_category:
            skills = category.skill.all()
            for skill in skills:
                user_list = User.objects.filter(skill=skill.id)
                temp_people += user_list
        people = set(temp_people)
    else:
        people = User.objects.filter(is_staff=False)
    serialzer = UserListSerializer(people, many=True)
    return Response(serialzer.data)