from django.urls import path

from . import views

urlpatterns = [
    path('api/frontend', views.FrontendCreate.as_view()),
]
