# -*- coding: utf-8 -*-
#!/usr/bin/env python

from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response 

from boards.models import Board, Post, Topic

from . serializers import BoardSerializer, PostSerializer, TopicSerializer

# Create your views here.

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



"""
only using for javascript 

import axios from 'axios';
const url = 'http://localhost:8000';

export class API {

	constructor() {

		// GET request

		getBoard() {

			const url = `{url}/api/board/<int:pk>/`;
			return axios.get(url).then(response => response.data);

		}

		// POST request

		createBoard() {

			const url = `{url}/api/board/<int:pk/new/`;
			return axios.post(url.board);

		}


	}

}
"""