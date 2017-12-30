from __future__ import unicode_literals
from django.db import models
from django.utils import timezone

class task(models.Model):
	taskid = models.AutoField(primary_key=True)
	taskName = models.CharField(max_length=256)
	isDone = models.BooleanField(default=False)	
	createdAt = models.DateTimeField(default=timezone.now)
	doneAt = models.DateTimeField(null=True,blank=True)

	def __str__(self):
		return self.taskName
