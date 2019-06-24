# -*- coding: utf-8 -*-
#!/usr/bin/env python

from rest_framework import serializers, status

from boards.models import Board, Topic, Post


class BoardSerializer(serializers.ModelSerializer):

	class Meta:

		model = Board 
		fields = '__all__'

class TopicSerializer(serializers.ModelSerializer):

	class Meta:

		model = Topic
		fields = '__all__'

class PostSerializer(serializers.ModelSerializer):

	class Meta:

		model = Post
		fields = '__all__'