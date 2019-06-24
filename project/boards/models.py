# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Board(models.Model):

    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255)

    def __str__(self):

        return self.name

class Topic(models.Model):

    subject = models.CharField(max_length=255)
    last_updated = models.DateTimeField(auto_now_add=True)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    starter = models.ForeignKey(User, on_delete=models.CASCADE)

class Post(models.Model):

    message = models.TextField(max_length=4000)
    post = models.TextField()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_by = models.DateTimeField(User, auto_now_add=True)
    updated_by = models.DateTimeField(User, auto_now=True, null=True)

