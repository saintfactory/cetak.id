# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django.contrib import admin
from django.urls import path, include

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from boards import views

urlpatterns = [

    path('', views.home, name='home'),
    path('', include('boards.urls')),
    path('', include('accounts.urls')),
    path('api/', include('api.urls')),
    path('api/auth/obtain_token/', obtain_jwt_token),
    path('api/auth/refresh_token/', refresh_jwt_token),
    path('admin/', admin.site.urls),
    path('payments/', include('payments.urls')),

]
