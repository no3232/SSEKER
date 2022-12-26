from .models import Project, Participant, Applicant
from accounts.models import User
from objects.serializers import CampusSerializer, SkillCategorySerializer

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    campus = CampusSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'campus', 'part', 'skill', )


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


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'
        read_only_fields = ('founder', 'participant')


class ProjectListSerializer(serializers.ModelSerializer):
    campus = CampusSerializer()
    founder = UserSerializer()
    participant = ParticipantSerializer(many=True)
    participant_count = serializers.IntegerField(source="participant.count", read_only=True)

    class Meta:
        model = Project
        fields = '__all__'