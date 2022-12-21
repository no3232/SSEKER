from rest_framework import serializers
from .models import User
from projects.models import Skill as Skill
from projects.models import Project as Project
from projects.models import Campus as Campus
from projects.models import Participant as Participant
from projects.serializers import SkillSerializer as SkillSerializer
from projects.serializers import ParticipantSerializer as ParticipantSerializer
from projects.serializers import ProjectListSerializer as ProjectListSerializer


class CampusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campus
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
    skill = serializers.PrimaryKeyRelatedField(queryset=Skill.objects.all(),many=True)

    class Meta:
        model = User
        fields = '__all__'
        read_only_fields = ('username', 'password', )


class UserListSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    campus = CampusSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'email', 'introduce', 'github', 'blog',)
        read_only_fields = ('username', 'password',)
    