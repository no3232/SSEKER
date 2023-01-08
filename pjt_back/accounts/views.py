from .models import User
from objects.models import Campus, SkillCategory
from objects.serializers import SkillSerializer, CampusSerializer
from .serializers import UserSerializer, UserUpdateSerializer, UserUpdateSkillSerializer, UserUpdateLanguageSerializer, UserUpdateEtcSerializer, UserSearchSerializer, RecommendUserListSerializer

from django.http import JsonResponse

from urllib.parse import unquote
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

def filtering_peoples(request):
    campus  = request.GET.get('campus')
    part    = request.GET.get('part')
    skills  = request.GET.get('skills')
    count   = request.GET.get('count')
    peoples = User.objects.filter(is_staff=False)

    if campus:
        campus = int(campus)
        nationwide = Campus.objects.get(title='전국').id
        if campus != nationwide:
            peoples = peoples.filter(campus=campus)

    if part:
        part = int(part)
        peoples = peoples.filter(part=part)

    if skills:
        skills = list(map(int, skills.split(','))) 
        temp_peoples = []
        for skill in skills:
            for people in peoples:
                if people.skill.all().filter(id=skill):
                    temp_peoples.append(people)
        peoples = temp_peoples

    filter_count = 20
    count = int(count)
    peoples = peoples[(count-1)*filter_count:count*filter_count]
    return peoples

@api_view(['GET'])
def peoples(request):
    peoples = filtering_peoples(request)
    peoples_json = []
    for people in peoples:
        position = people.position
        skills = people.skill.all()
        priority_skills = []
        for skill in skills:
            skill_category = skill.category
            if skill_category == position:
                priority_skills.insert(0, skill)
            else:
                priority_skills.append(skill)

        id = people.id
        name = people.name
        part = people.part
        username = people.username
        campus = CampusSerializer(people.campus).data
        skill = SkillSerializer(priority_skills, many=True).data
        people = {
            'id': id,
            'name': name,
            'part': part,
            'campus': campus,
            'skill': skill,
            'username': username,
        }
        peoples_json.append(people)

    peoples_count = len(User.objects.all()) - 1
    peoples = peoples_json
    context = {
        'peoples_count': peoples_count,
        'peoples': peoples,
        }
    return JsonResponse(context)

@api_view(['GET', 'PUT', 'DELETE'])
def people_detail(request, user_id):
    user = request.user
    if request.method == 'GET':
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data ,status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        skill = request.data.get('skill')
        language = request.data.get('language')

        if not skill and not language:
            serializer = UserUpdateEtcSerializer(user, data=request.data)
        elif not skill:
            serializer = UserUpdateLanguageSerializer(user, data=request.data)
        elif not language:
            serializer = UserUpdateSkillSerializer(user, data=request.data)
        else:
            serializer = UserUpdateSerializer(user, data=request.data)
        
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def search(request):
    name = unquote(request.GET.get('name'))
    users = User.objects.filter(name__contains=name)
    serializer = UserSearchSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def recommend_users(request):
    position        = SkillCategory.objects.all()
    frontend_user   = {0: User.objects.filter(position=position[0]).exists()}
    backend_user    = {1: User.objects.filter(position=position[1]).exists()} 
    uiux_user       = {2: User.objects.filter(position=position[2]).exists()}
    devops_user     = {3: User.objects.filter(position=position[3]).exists()}
    
    position_users  = [frontend_user, backend_user, uiux_user, devops_user]
    recommend_users = []
    for temp_user in position_users:
        for pos, flag in temp_user.items():
            if flag:
                user = User.objects.filter(position=position[pos]).order_by('?')[0]
                recommend_users.append(user)
    serializer = RecommendUserListSerializer(recommend_users, many=True)
    return Response(serializer.data)
