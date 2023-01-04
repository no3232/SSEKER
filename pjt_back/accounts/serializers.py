from .models import User
from projects.models import Project, Participant
from objects.serializers import CampusSerializer, BaekJoonLevelSerializer, SkillSerializer, LanguageSerializer, TrackSerializer, SkillCategorySerializer

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
        fields = ('id', 'username', 'campus', 'part', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'comment', 'position')
        read_only_fields = ('username', 'password', )


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'language', 'comment', 'position')
        read_only_fields = ('username', 'password', )


class UserUpdateSkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'comment', 'position') 
        read_only_fields = ('username', 'password', )


class UserUpdateLanguageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'email', 'introduce', 'github', 'blog', 'level', 'track', 'language', 'comment', 'position')
        read_only_fields = ('username', 'password', )


class UserSerializer(serializers.ModelSerializer):
    campus = CampusSerializer()
    skill = SkillSerializer(many=True)
    level = BaekJoonLevelSerializer()
    track = TrackSerializer()
    language = LanguageSerializer(many=True)
    position = SkillCategorySerializer()

    class Meta:
        model = User
        exclude = ('password', 'last_login', 'first_name', 'last_name', 'is_superuser', 'is_staff', 'is_active', 'date_joined', 'groups', 'user_permissions',)
        read_only_fields = ('username', 'password', )


class UserListSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    campus = CampusSerializer()
    
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'skill', 'part', 'campus')
        read_only_fields = ('username', 'password',)


class UserSearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name', 'campus', 'part',)


class RecommendUserListSerializer(serializers.ModelSerializer):
    position = SkillCategorySerializer()
    campus = CampusSerializer()

    class Meta:
        model = User
        fields = ('id', 'name', 'campus', 'part', 'comment', 'position')
