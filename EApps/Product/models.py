from django.contrib.auth.models import User
from django.db import models

# Create your models here.




# class Brand(models.Model):
#       name=models.CharField(unique=True)
#       image=models.ImageField()
size=(
      (1,'S'),
      (2,'M'),
      (3,'XL'),
      (4,'XXL')
)

color=(
      ("#000","White"),
      ("#fff",'Black')
)

# class Proudct(models.Model):
#       name=models.CharField(max_length=30)
#       description=models.TextField(max_length=3000)
#       display=models.BooleanField(default=True)
#       code=models.CharField(max_length=10)
#       order_qunatity=models.IntegerField(default=1)
#       stock_qunatity=models.IntegerField(default=0)
#       size=models.CharField(choices=size)
#       brand=models.ManyToManyField()
#       date_added=models.DateTimeField(auto_now_add=True)
#       added_by=models.ForeignKey(User,on_delete=models.CASCADE)
#       main_image=models.ImageField()
#       badge=models.CharField(max_length=15,blank=True)
#       highlights=models.CharField(max_length=20,blank=True)
