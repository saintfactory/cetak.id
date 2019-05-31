from django.shortcuts import render
from rest_framework import generics
from . serializers import UserSerializer
from . import models

# Create your views here.

class UserList(generics.ListCreateAPIView):

    queryset = models.CustomUser.objects.all()
    serializer_class = UserSerializer
