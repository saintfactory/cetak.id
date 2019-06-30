# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login as auth_login

from rest_framework.decorators import api_view

# Create your views here.

@api_view(['POST'])
def signup(request, format=None):

    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form' : form})


