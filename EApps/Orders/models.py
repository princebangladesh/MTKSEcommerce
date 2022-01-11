
from django.db import models
from django.contrib.auth.models import User
from django.db.models import base



order_choices=(
      (1,"Pending"),
      (2,"Confirmed")
)
# Create your models here.
class Order(models.Model):
      status=models.IntegerField(choices=order_choices,default=1)
      purchase_date=models.DateTimeField(auto_now_add=True)
      purchased_by=models.ForeignKey(User,on_delete=models.CASCADE,related_name='buyer')
      confirmed_by=models.ForeignKey(User,blank=True,null=True,on_delete=models.CASCADE,related_name='confirmer')