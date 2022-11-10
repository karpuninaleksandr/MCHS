from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.views import APIView
from . import serializers
from .models import Call


class CallView(APIView):
    """Method for create call record"""
    @transaction.atomic
    def post(self, request):
        (serializer := serializers.CallSerializerForUpdateData(data=request.data)).is_valid()
        instance = serializer.save()
        return Response(status=status.HTTP_200_OK)

    def get(self, request):
        queryset = Call.objects.all()
        serializer = serializers.CallSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


#TODO обернутб в сепкруласс в котором будет прописана логика обработки исключений