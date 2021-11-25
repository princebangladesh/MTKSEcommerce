from django.contrib import admin
from .models import Category,SubCategory,SubPreCategory,SubPostCategory
# Register your models here.
class SubCategoryAdmin(admin.ModelAdmin):
      list_display=('name','Category')
      list_filter=('Category',)

class SubPreCategoryAdmin(admin.ModelAdmin):
      list_display=('name','SubCategory',)
      list_filter=('SubCategory',)


admin.site.register(Category)
admin.site.register(SubCategory,SubCategoryAdmin)
admin.site.register(SubPreCategory,SubPreCategoryAdmin)
admin.site.register(SubPostCategory)
