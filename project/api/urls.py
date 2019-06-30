# -*- coding: utf-8 -*-
#!/usr/bin/env python

from django.urls import path

from . views import BoardList, BoardDetail

urlpatterns = [

	# path('board/', views.board_list),
	# path('board/<int:pk>/', views.board_detail),
	path('board/', BoardList.as_view(), name='board-list'),
	path('board/<int:pk>/', BoardDetail.as_view(), name='board-detail',)

]