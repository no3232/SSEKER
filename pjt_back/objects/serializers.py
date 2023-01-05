from .models import Campus, BaekJoonLevel, Skill, SkillCategory, Language, Track

from rest_framework import serializers


class CampusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Campus
        fields = '__all__'


class TrackSerializer(serializers.ModelSerializer):

    class Meta:
        model = Track
        fields = '__all__'


class BaekJoonLevelSerializer(serializers.ModelSerializer):

    class Meta:
        model = BaekJoonLevel
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = ('__all__')


class SkillCategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SkillCategory
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Language
        fields = ('__all__')


class LanguageCategorysSerializer(serializers.ModelSerializer):
    category = serializers.IntegerField(default=0)
    
    class Meta:
        model = Language
        fields = ('__all__')