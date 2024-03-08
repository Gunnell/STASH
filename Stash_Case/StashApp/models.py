from django.db import models


# Create your models here.
class Inventories(models.Model):
    InventoryID = models.AutoField(primary_key=True)
    InventoryName = models.CharField(max_length=300)


class Items(models.Model):
    ItemID = models.AutoField(primary_key=True)
    ItemName = models.CharField(max_length=300)
    ItemDescription = models.CharField(max_length=500)
    ItemQuantity = models.IntegerField()
    ItemLocation = models.CharField(max_length=300)
    InventoryID = models.ForeignKey(Inventories, on_delete=models.CASCADE) # i will think about it later