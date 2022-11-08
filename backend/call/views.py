from rest_framework.views import APIView
from . import serializers


class CreateCall(APIView):
    """Method for create call record"""

    def post(self, request):
        serializer = serializers.CallSerializer(request.data)
        print(res := serializer.is_valid())
        g = res  # vayaaaaaa

