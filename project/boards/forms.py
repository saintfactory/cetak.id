# -*- coding: utf-8 -*-
#!/usr/bin/env python

from __future__ import unicode_literals

from django import forms 

from . models import Topic


class NewTopicForm(forms.ModelForm):

    message = forms.CharField(widget=forms.Textarea(), max_length=4000)

    class Meta:

        model = Topic
        fields = ['subject', 'message']