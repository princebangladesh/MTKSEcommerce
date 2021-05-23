from django.shortcuts import render
from.models import Carousel

def home(request):
      carosels=Carousel.objects.filter(published=True)
      return render(request,'home.html',{'carousels':carosels})
