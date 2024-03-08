# Project Name

A simple web application for managing inventory and items.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Inventory](#inventory)
  - [Item](#item)
- [Running the Project](#running-the-project)

## Overview

This project is a web application designed to manage inventory and items. It provides a set of API endpoints for basic CRUD operations on both inventory and items. The application is built using Django and Django REST framework.


## Usage

The application provides endpoints for managing inventory and items through a RESTful API. See the [API Endpoints](#api-endpoints) section for details on available operations.

## API Endpoints

### Inventory

- **GET /inventory**
  - Retrieve a list of all inventories.

- **POST /inventory/**
  - Create a new inventory.
  - Request Body: `{ "id": <id>, "name": <name> }`

- **PUT /inventory/**
  - Update an existing inventory.
  - Request Body: `{ "id": <id>, "name": <name> }`

- **DELETE /inventory/{id}**
  - Delete the inventory with the specified ID.

### Item

- **GET /item**
  - Retrieve a list of all items.

- **POST /item/**
  - Create a new item.
  - Request Body:
    ```json
    {
        "ItemName": "WebApp Repository2",
        "ItemDescription": "Main repository for the company's web application2",
        "ItemQuantity": 2,
        "ItemLocation": "GitLab",
        "InventoryID": 1
    }
    ```

- **PUT /item/**
  - Update an existing item.
  - Request Body: Same as the POST request.

- **DELETE /item/{id}**
  - Delete the item with the specified ID.

## Running the Project

To run the project, execute the following command:

```bash
cd path/to/STASH
cd Stash_Case
python manage.py runserver
cd ../ui
open index.html  
