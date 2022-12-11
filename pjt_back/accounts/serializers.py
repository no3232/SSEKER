from rest_framework import serializers
from .models import User, Location
from projects.models import Project as Project
from projects.models import Participant as Participant
from projects.serializers import SkillSerializer as SkillSerializer
from projects.serializers import ParticipantSerializer as ParticipantSerializer
from projects.serializers import ProjectListSerializer as ProjectListSerializer


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ParticipantProjectSerializer(serializers.ModelSerializer):
    project_set = ProjectSerializer(many=True)
    class Meta:
        model = Participant
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'


class UserListSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    location = LocationSerializer(many=True)
    manager = ParticipantProjectSerializer(many=True)

    class Meta:
        model = User
        fields = '__all__'