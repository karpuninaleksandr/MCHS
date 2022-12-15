from django.db import transaction
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.views import APIView
from . import serializers
from .choices import Role
from .models import Call, Person, CallToPerson


class CallView(APIView):
    """Method for create call record"""
    @transaction.atomic
    def post(self, request):
        """ Save call """
        (serializer := serializers.CallSerializerForUpdateData(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)


    def get(self, request):
        """ Show calls """
        queryset = Call.objects.exclude(calltoperson__person__role=Role.WORKER)
        serializer = serializers.CallSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        """ Add workers to the call """
        call_id = request.data.get('id')
        call = Call.objects.get(id=call_id)
        workers_id = request.data.get('workers')
        workers = Person.objects.filter(id__in=workers_id)
        for worker in workers:
            CallToPerson(person=worker, call=call).save()


class PersonView(APIView):
    """ Method for create person record"""
    def get(self, request):
        """ Show workers """
        queryset = Person.objects.filter(role=Role.WORKER)
        serializer = serializers.PersonSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @transaction.atomic
    def post(self, request):
        """ Save person """
        (serializer := serializers.PersonSerializerForAddWorker(data=request.data)).is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)


class CallWithPeoplesView(APIView):
    """ Show all calls """
    def get(self, request):
        queryset = Call.objects.all()
        serializer = serializers.CallSerializerForGetMethod(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
