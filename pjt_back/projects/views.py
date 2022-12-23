from .models import Project
from .serializers import ProjectSerializer ,ProjectListSerializer

from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def projects(request):
    if request.method == 'GET':
        if request.GET.getlist('params'):
            pass
        else:
            projects = Project.objects.all()
            serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)


@api_view(['POST', 'GET', 'PUT', 'DELETE'])
def project_detail(request, project_id=None):
    if project_id:
        project = get_object_or_404(Project, id=project_id)
        if request.method == 'GET':
            serializer = ProjectListSerializer(project)
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