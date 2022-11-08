from rest_framework import serializers

from .models import Person, Calling


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class CallSerializer(serializers.ModelSerializer):
    called = PersonSerializer()

    class Meta:
        model = Calling
        fields = '__all__'
