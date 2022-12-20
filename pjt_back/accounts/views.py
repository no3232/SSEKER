from .models import User
from .serializers import UserListSerializer, UserSerializer
from projects.models import SkillCategory as SkillCategory
from projects.models import Skill as Skill

from django.db.models import Q
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'PUT', 'DELETE'])
def people(request, username=None):
    user = User.objects.get(username=username)
    if request.method == 'GET':
        serialzer = UserListSerializer(user)
    elif request.method == 'PUT':
        serialzer = UserSerializer(user, data=request.data)
        if serialzer.is_valid():
            serialzer.save()
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(status=status.HTTP_201_CREATED)


@api_view(['GET',])
def peoples(request, skill_category=None):
    if skill_category:
        pass
    else:
        people = User.objects.filter(is_staff=False)
    serialzer = UserListSerializer(people, many=True)
    return Response(serialzer.data)