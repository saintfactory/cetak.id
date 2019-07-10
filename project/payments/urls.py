from django.urls import path

from . import views

urlpatterns = [

    path('', views.checkout_api_permata, name='permata'),

]
