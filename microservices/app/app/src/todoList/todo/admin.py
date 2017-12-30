from django.contrib import admin
from models import task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('taskid','taskName','isDone','createdAt','doneAt')
admin.site.register(task,TaskAdmin)
