from .models import Project, Participant, Applicant, Status
from accounts.models import User
from objects.serializers import CampusSerializer, SkillCategorySerializer, SkillSerializer

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username',)


class ApplicantListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Applicant
        fields = '__all__'


class ParticipantSerializer(serializers.ModelSerializer):
    manager = UserSerializer()
    skillcategory = SkillCategorySerializer()
    
    class Meta:
        model = Participant
        fields = ('id', 'manager', 'skillcategory',)


class StatusSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Status
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    participant = ParticipantSerializer(many=True)
    participant_count = serializers.IntegerField(source='participant.count', read_only=True)
    campus = CampusSerializer()
    founder = UserSerializer()
    status = StatusSerializer()
    skill = SkillSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('founder', 'participant')


class ProjectListSerializer(serializers.ModelSerializer):
    participant_count = serializers.IntegerField(source='participant.count', read_only=True)

    class Meta:
        model = Project
        fields = ('id', 'title', 'skill', 'fixed_count', 'participant_count', 'status',)