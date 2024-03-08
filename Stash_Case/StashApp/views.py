from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from StashApp.models import Inventories, Items
from StashApp.serializers import InventoriesSerializer, ItemsSerializer

# Create your views here.

@csrf_exempt
def inventoryApi(request, id=0):
    if request.method == "GET":
        inventories = Inventories.objects.all()
        inventories_serializer = InventoriesSerializer(inventories, many=True)
        return JsonResponse(inventories_serializer.data, safe=False)
    elif request.method == "POST":
        inventory_data = JSONParser().parse(request)
        inventory_serializer = InventoriesSerializer(data=inventory_data)
        if inventory_serializer.is_valid():
            inventory_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        inventory_data = JSONParser().parse(request)
        inventory = Inventories.objects.get(InventoryID=inventory_data["InventoryID"])
        inventory_serializer = InventoriesSerializer(inventory, data=inventory_data)
        if inventory_serializer.is_valid():
            inventory_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == "DELETE":
        inventory = Inventories.objects.get(InventoryID=id)
        inventory.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    

@csrf_exempt
def itemApi(request, id=0):
    if request.method == "GET":
        items = Items.objects.all()
        items_serializer = ItemsSerializer(items, many=True)
        return JsonResponse(items_serializer.data, safe=False)
    elif request.method == "POST":
        item_data = JSONParser().parse(request)
        item_serializer = ItemsSerializer(data=item_data)
        if item_serializer.is_valid():
            item_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        item_data = JSONParser().parse(request)
        item = Items.objects.get(ItemID=item_data["ItemID"])
        item_serializer = ItemsSerializer(item, data=item_data)
        if item_serializer.is_valid():
            item_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == "DELETE":
        item = Items.objects.get(ItemID=id)
        item.delete()
        return JsonResponse("Deleted Successfully", safe=False)