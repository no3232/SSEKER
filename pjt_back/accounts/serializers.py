from .models import User
from projects.models import Project, Participant
from objects.serializers import CampusSerializer, BaekJoonLevelSerializer, SkillSerializer, LanguageSerializer, TrackSerializer

from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ParticipantProjectSerializer(serializers.ModelSerializer):
    project_set = ProjectSerializer(many=True)
    class Meta:
        model = Participant
        fields = '__all__'


class UserUpdateEtcSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'email', 'introduce', 'github', 'blog', 'level', 'track',)
        read_only_fields = ('username', 'password', )


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'language')
        read_only_fields = ('username', 'password', )


class UserUpdateSkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'email', 'introduce', 'github', 'blog', 'level', 'track',) 
        read_only_fields = ('username', 'password', )


class UserUpdateLanguageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'language')
        read_only_fields = ('username', 'password', )


class UserSerializer(serializers.ModelSerializer):
    campus = CampusSerializer()
    skill = SkillSerializer(many=True)
    level = BaekJoonLevelSerializer()
    track = TrackSerializer()
    language = LanguageSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'github', 'blog', 'level', 'track', 'language', 'email', 'introduce',)
        read_only_fields = ('username', 'password', )


class UserListSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username','skill', 'part')
        read_only_fields = ('username', 'password',)