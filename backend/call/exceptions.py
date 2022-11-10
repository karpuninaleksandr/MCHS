from rest_framework import serializers


class PersonNotFound(serializers.ValidationError):
    ...
