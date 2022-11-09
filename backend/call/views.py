from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.views import APIView
from . import serializers
from .models import Person


class CallView(APIView):
    """Method for create call record"""

    @transaction.atomic
    def post(self, request):
        ser = serializers.CallSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response({'good': 'OK!'})
