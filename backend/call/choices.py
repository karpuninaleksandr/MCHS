from django.db import models


class Role(models.TextChoices):
    GUEST = 'Guest'
    WORKER = 'Worker'


class Injury(models.TextChoices):
    YES = 'Да'
    NO = 'Нет'
    UNKNOWN = 'Нет инфорамции'