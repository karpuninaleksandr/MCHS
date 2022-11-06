from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Frontend
from .serializers import FrontendSerializer


class FrontendCreate(APIView):
    def get(self, request):
        frontend = Frontend.objects.all()
        serializer = FrontendSerializer(frontend)
        return Response(serializer.data)
    def post(self,request):
        print("POST!!!!")
