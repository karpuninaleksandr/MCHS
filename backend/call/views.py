from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.views import APIView
from . import serializers


class CallView(APIView):
    """Method for create call record"""
    @transaction.atomic
    def post(self, request):
        serializers.CallSerializerForUpdateData(data=request.data).is_valid()
        return Response({'good': 'OK!'})

#TODO обернутб в сепкруласс в котором будет прописана логика обработки исключений