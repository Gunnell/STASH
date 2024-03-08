from django.urls import re_path as url

from StashApp import views

urlpatterns = [
    url(r'^inventory/$', views.inventoryApi),
    url(r'^inventory/([0-9]+)$', views.inventoryApi),
    
    url(r'^item/$', views.itemApi),
    url(r'^item/([0-9]+)$', views.itemApi),
]

