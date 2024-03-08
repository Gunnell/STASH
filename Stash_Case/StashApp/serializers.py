from rest_framework import serializers

from StashApp.models import Inventories, Items


class InventoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventories
        fields = "InventoryID", "InventoryName"

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = "ItemID", "ItemName", "ItemDescription", "ItemQuantity", "ItemLocation", "InventoryID"

