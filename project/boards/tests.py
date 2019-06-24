# -*- coding: utf-8 -*-
#!/usr/bin/env python
  
from __future__ import unicode_literals

from django.test import TestCase
from django.urls import reverse, resolve

from . views import home, board_topics
from . models import Board

# Create your tests here.
 
# Don't spoiled this test
# Assumed if you've knowledge about django test
# run with `manage.py test`

class HomeTest(TestCase):

    def setUp(self):

        self.board = Board.objects.create(name='Board', description='Mockup Board')
        url = reverse('home')
        self.response = self.client.get(url)

    def test_home_view_status_response(self):

        url = reverse('home')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_home_resolves_home_view(self):

        view = resolve('/')
        self.assertEquals(view.func, home)

    def test_home_that_contains_link_to_next_page(self):

        board_topics_url = reverse('board_topics', kwargs={'pk' : self.board.pk})
        self.assertContains(self.response, 'href="{0}"'.format(board_topics_url))


class BoardTopicTest(TestCase):

    def setUp(self):

        Board.objects.create(name='Board', description='Mockup board')

    def test_board_topics_view_if_success(self):

        url = reverse('board_topics', kwargs={'pk' : 1})
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_board_topics_view_if_not_success(self):

        url = reverse('board_topics', kwargs={'pk' : 99})
        response = self.client.get(url)
        self.assertEquals(response.status_code, 404)

    def test_board_that_contains_link_to_home_page(self):

        board_topics_url = reverse('board_topics', kwargs={'pk' : 1})
        response = self.client.get(board_topics_url)
        homepage = reverse('home')
        self.assertContains(response, 'href="{0}"'.format(homepage))

    def test_board_resolves_view(self):

        view = resolve('/')
        self.assertEquals(views.func, board_topics)

    

