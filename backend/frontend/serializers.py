from rest_framework import serializers
from .models import Frontend


class FrontendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frontend
        fields = ('id', 'title')
