# -*- coding: utf-8 -*-
#!/usr/bin/env python

from django.urls import path

from . import views

urlpatterns = [

	path('board/<int:pk>/', views.board_list),

]