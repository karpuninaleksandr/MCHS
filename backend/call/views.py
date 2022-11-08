from django.db import transaction
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from . import serializers


class CallView(APIView):
    """Method for create call record"""

    # @transaction.atomic
    def post(self, request):
        serializer = serializers.CallSerializer(data=request.data)
        print(res := serializer.is_valid(), serializer.errors, serializer.data, end='\n')
        g = res  # vayaaaaaa
        return Response({'good': 'OK!'})

    def get(self, request):

        ...
