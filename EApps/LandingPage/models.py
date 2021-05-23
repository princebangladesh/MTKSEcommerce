from django.db import models
from django.utils.translation import ugettext_lazy as _


class Carousel(models.Model):
      title=models.CharField(max_length=50,null=True,blank=True)
      link=models.URLField(max_length=200)
      image=models.ImageField(upload_to='Carousel', height_field=None, width_field=None, max_length=None)
      published=models.BooleanField(default=True)
      
      class Meta:
          verbose_name = _("Carousel")
          verbose_name_plural = _("Carousels")

      def __str__(self):
            return self.title


