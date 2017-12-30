from django.contrib import admin
from . import models


class TaskAdmin(admin.ModelAdmin):
    list_display = ('taskid','taskName','isDone','createdAt','doneAt')
admin.site.register(models.task,TaskAdmin)
