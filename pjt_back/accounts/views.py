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


@api_view(['GET'])
def peoples(request):
    campus = request.GET.get('campus')
    part = request.GET.get('part')
    skills = request.GET.get('skills')
    peoples = User.objects.filter(is_staff=False)

    if campus:
        peoples = peoples.filter(campus=campus)
    
    if part:
        peoples = peoples.filter(part=part)

    temp_peoples = []
    if skills:
        skills = list(map(int, skills.split(',')))
        for skill in skills:
            for people in peoples:
                if people.skill.all().filter(id=skill):
                    temp_peoples.append(people)
        peoples = temp_peoples

    serialzer = UserListSerializer(peoples, many=True)
    return Response(serialzer.data)