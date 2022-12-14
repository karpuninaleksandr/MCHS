from rest_framework import routers
from django.urls import path, include
from . import views

router = routers.DefaultRouter()

# router.register(r'calls', views.CreateCall, basename='calls')

urlpatterns = [
    path('api/calls', views.CallView.as_view()),
    path('api/calls/with-peoples', views.CallWithPeoplesView.as_view()),
    path('api/persons', views.PersonView.as_view()),
    # path('^', include(router.urls))
]
