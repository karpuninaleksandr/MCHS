from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.views import APIView
from . import serializers
from .models import Call, Person


class CallView(APIView):
    """Method for create call record"""
    @transaction.atomic
    def post(self, request):
        (serializer := serializers.CallSerializerForUpdateData(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)

    @staticmethod
    def get():
        queryset = Call.objects.all()
        serializer = serializers.CallSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PersonView(APIView):
    @staticmethod
    def get():
        queryset = Person.objects.all()
        serializer = serializers.PersonSerializer(queryset, many=True)

    @transaction.atomic()
    def post(self, request):
        (serializer := serializers.PersonSerializerForUpdateData(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)
