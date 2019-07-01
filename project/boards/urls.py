# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django.urls import path 

from . import views

urlpatterns = [

    path('home/', views.home, name='home'),
    path('board/<int:pk>/', views.board_topics, name='board_topics'),
    path('board/<int:pk>/new/', views.new_topics, name='new_topics'),

]