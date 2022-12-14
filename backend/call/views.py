from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.views import APIView
from . import serializers
from .choices import Role
from .models import Call, Person


class CallView(APIView):
    """Method for create call record"""
    @transaction.atomic
    def post(self, request):
        (serializer := serializers.CallSerializerForUpdateData(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)

    def get(self, request):
        queryset = Call.objects.filter(workers__isnull=False)
        serializer = serializers.CallSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        call_id = request.get('id')
        call = Call.objects.get(id=call_id)
        workers_id = request.get('workers')
        workers = Person.objects.filter(id__in=workers_id)
        for worker in workers:
            worker.call = call
            worker.save()


class PersonView(APIView):
    def get(self, request):
        queryset = Person.objects.all(role=Role.WORKER)
        serializer = serializers.PersonSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @transaction.atomic
    def post(self, request):
        (serializer := serializers.PersonSerializerForUpdateData(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)


class CallWithPeoplesView(APIView):
    def get(self, request):
        queryset = Call.objects.all()
        serializer = serializers.CallSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
