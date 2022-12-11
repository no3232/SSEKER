from .models import User
from .serializers import UserListSerializer

from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def people(request, username=None):
    if request.method == 'GET':
        if username:
            pass
            user = User.objects.get(username=username)
            serialzer = UserListSerializer(user)
        else:
            people = User.objects.filter(is_staff=False)
            serialzer = UserListSerializer(people, many=True)
        return Response(serialzer.data)
        
@api_view(['GET'])
def adpeoples(request):
    if request.method == 'GET':
        peoples = User.objects.filter(is_staff=False).order_by('?')[:3]
        serializer = UserListSerializer(peoples, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def similarskill(request, username):
    user = get_object_or_404(User, username=username)
    user_id = user.id
    if user.skill.all():
        user_skill = user.skill.all()[0]
        users = User.objects.filter(is_staff=False).filter(skill=user_skill).exclude(id=user_id)
        serializer = UserListSerializer(users, many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_204_NO_CONTENT)