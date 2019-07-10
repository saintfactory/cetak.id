# -*- coding: utf-8 -*-
#!/usr/bin/env python

from django.shortcuts import render
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import cache_page

from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response 
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.status import (

	HTTP_400_BAD_REQUEST,
	HTTP_404_NOT_FOUND,
	HTTP_200_OK

)

from boards.models import Board, Post, Topic

from . serializers import *

# Create your views here.

class BoardList(generics.ListCreateAPIView):

	permission_classes = (AllowAny,)

	queryset = Board.objects.all()
	serializer_class = BoardSerializer

	# Cache for requested url each 1 hour

	@method_decorator(cache_page(60*1))
	def dispatch(self, *args, **kwargs):

		return super(BoardList, self).dispatch(*args, **kwargs)

class BoardDetail(generics.RetrieveUpdateDestroyAPIView):

	permission_classes = (AllowAny,)

	queryset = Board.objects.all()
	serializer_class = BoardSerializer

	# Cache for requested url each 1 hour

	@method_decorator(cache_page(60*1))
	def dispatch(self, *args, **kwargs):

		return super(BoardDetail, self).dispatch(*args, **kwargs)


@api_view(['GET', 'POST'])
def board_list(request, format=None):

	if request.method == 'GET':
		boards = Board.objects.all()
		serializer = BoardSerializer(boards, many=True)
		return Response(serializer.data)

	elif request.method == 'POST':
		serializer = BoardSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def board_detail(request, pk, format=None):

	try:
		boards = Board.objects.get(pk=pk)
	except Board.DoesNotExist:
		return Response(status=status.HTTP_404_NOT_FOUND)

	if request.method == 'GET':
		serializer = BoardSerializer(boards)
		return Response(serializer.data)

	elif request.method == 'PUT':
		serializer = BoardSerializer(boards, data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

	elif request.method == 'DELETE':
		boards.delete()
		return Response(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def login(request):

	username = request.data.get('username')
	password = request.data.get('password')
	
	if username is None or password is None:
		return Response({'error' : 'Harap isi username dan password'}, status=HTTP_400_BAD_REQUEST)
	user = authenticate(username=username, password=password)
	if not user:
		return Response({'error' : 'Data tidak valid'}, status=HTTP_404_NOT_FOUND)
	token, _ = Token.objects.get_or_create(user=user)
	return Response({'token' : token.key}, status=HTTP_200_OK)

