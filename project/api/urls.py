# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django.urls import path

from . views import *

urlpatterns = [

	path('board/', BoardList.as_view(), name='board-list'),
	path('board/<int:pk>/', BoardDetail.as_view(), name='board-detail'),
	path('board/login/', login),

]