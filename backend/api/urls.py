from django.urls import path
from .views import facts_api

urlpatterns = [
    path('facts/', facts_api),
]
