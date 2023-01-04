from .models import Project
from .serializers import ProjectSerializer, ProjectListSerializer
from objects.models import Campus

from django.http import JsonResponse
from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def projects(request):
    if request.method == 'GET':
        campus   = request.GET.get('campus')
        part     = request.GET.get('part')
        skills   = request.GET.get('skills')
        count    = request.GET.get('count')
        projects = Project.objects.all()

        if campus:
            campus = int(campus)
            nationwide = Campus.objects.get(title='전국').id
            if campus != nationwide:
                projects = projects.filter(campus=campus)
    
        if part:
            part = int(part)
            projects = projects.filter(part=part)

        if skills:
            skills = list(map(int, skills.split(','))) 
            temp_projects = []
            for skill in skills:
                for project in projects:
                    if project.skill.all().filter(id=skill):
                        temp_projects.append(project)
            projects = temp_projects

        filter_count = 20
        count = int(count)
        projects = projects[(count-1)*filter_count:count*filter_count]
        serializer = ProjectListSerializer(projects, many=True)
        
        projects_count = len(Project.objects.all())
        projects = serializer.data
        context = {
            'projects_count': projects_count, 
            'projects': projects,
        }
        return JsonResponse(context)

@api_view(['POST', 'GET', 'PUT', 'DELETE'])
def project_detail(request, project_id=None):
    if project_id:
        project = get_object_or_404(Project, id=project_id)
        if request.method == 'GET':
            serializer = ProjectSerializer(project)
        elif request.method == 'PUT':
            serializer = ProjectSerializer(project, data=request.data)
            if serializer.is_valid():
                serializer.save()
        elif request.method == 'DELETE':
            project.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        if request.method == 'POST':
            serializer = ProjectSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(founder=request.user)
            else:
                print(serializer.errors)
            return Response(status=status.HTTP_201_CREATED)
