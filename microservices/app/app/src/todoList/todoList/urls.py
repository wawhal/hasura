from django.conf.urls import url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from todo import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',views.tasklist.as_view(),name='task'),
    url(r'^(?P<taskid>[0-9]+)',views.tasklist.as_view()),
    url(r'^done/(?P<taskid>[0-9]+)',views.doneTask,name='donetask'),
    url(r'^undone/(?P<taskid>[0-9]+)',views.undoneTask,name='undonetask'),
]

urlpatterns=format_suffix_patterns(urlpatterns)