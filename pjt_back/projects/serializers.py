from .models import Project, Skill, Location, Participant, SkillCategory, Applicant
from rest_framework import serializers
from accounts.models import User


class SkillCategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SkillCategory
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ('__all__')


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    skill = SkillSerializer(many=True)
    location = LocationSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'introduce', 'location', 'skill', )

class ApplicantListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Applicant
        fields = '__all__'


class ParticipantSerializer(serializers.ModelSerializer):
    manager = UserSerializer()
    skillcategory = SkillCategorySerializer()
    
    class Meta:
        model = Participant
        fields = '__all__'
        read_only_fields = ('manager', 'skillcategory')


class ProjectListSerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    founder = UserSerializer()
    participant = ParticipantSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'