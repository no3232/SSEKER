from .models import Project, Skill, Location, Participant
from .serializers import ProjectListSerializer

from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def projects(request):
    if request.method == 'GET':
        if request.GET.getlist('params'):
            pass
        else:
            projects = Project.objects.all()
            serializer = ProjectListSerializer(projects, many=True)
        return Response(serializer.data)

# POST 수정해야함
@api_view(['POST', 'GET'])
def project_detail(request, project_id=None):
    if request.method == 'POST':
        location = Location.objects.get(id=request.data['selectedLocation'])

        project = Project.objects.create(
            founder = request.user,
            title = request.data['title'],
            content = request.data['content'],
        )
        project.save()
        project.location.add(location)

        for par in request.data['selectedParticipant']:
            sel_skill = par['selectedSkill']
            skill = Skill.objects.get(title=sel_skill)
            manager_count = par['selectedCount']
            for _ in range(manager_count):
                participant = Participant.objects.create(project=project)
                participant.save()
                participant.skill.add(skill)
        return Response(status=status.HTTP_201_CREATED)

    if project_id:
        project = get_object_or_404(Project, id=project_id)
        if request.method == 'GET':
            serializer = ProjectListSerializer(project)
        return Response(serializer.data)