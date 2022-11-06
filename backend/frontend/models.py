from django.db import models


class Frontend(models.Model):
    title = models.CharField(max_length=20)
