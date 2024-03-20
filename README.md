# Food Delivery App API Documentation

This document provides detailed information about the APIs available in the Food Delivery App backend.

## Endpoints

### Register User

Allow users to register. Hash the password on store.

- **URL**: `POST /api/register`
- **Response**:
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: If the request body is invalid.
  - `500 Internal Server Error`: If there is a server error.

### Login User

Allow users to login. Return JWT token on login.

- **URL**: `POST /api/login`
- **Response**:
  - `201 Created`: Login successful. Returns JWT token.
  - `400 Bad Request`: If the email or password is incorrect.
  - `500 Internal Server Error`: If there is a server error.

### Reset Password

Allow users to reset the password identified by user id, providing the current password and new password in the body.

- **URL**: `PUT /api/user/:id/reset`
- **Response**:
  - `204 No Content`: Password reset successful.
  - `400 Bad Request`: If the request body is invalid.
  - `500 Internal Server Error`: If there is a server error.

### Add Restaurant

Allow to add new restaurants.

- **URL**: `POST /api/restaurants`
- **Response**:
  - `201 Created`: Restaurant added successfully.
  - `500 Internal Server Error`: If there is a server error.

### Get All Restaurants

Return a list of all available restaurants.

- **URL**: `GET /api/restaurants`
- **Response**:
  - `200 OK`: Returns a list of all available restaurants.
  - `500 Internal Server Error`: If there is a server error.

### Get Restaurant by ID

Return the details of a specific restaurant identified by its ID.

- **URL**: `GET /api/restaurants/:id`
- **Response**:
  - `200 OK`: Returns the details of the specific restaurant.
  - `500 Internal Server Error`: If there is a server error.

### Get Restaurant Menu

Return the menu of a specific restaurant identified by its ID.

- **URL**: `GET /api/restaurants/:id/menu`
- **Response**:
  - `200 OK`: Returns the menu of the specific restaurant.
  - `500 Internal Server Error`: If there is a server error.

### Add Menu Item

Allow the user to add a new item to a specific restaurant's menu identified by its ID.

- **URL**: `POST /api/restaurants/:id/menu`
- **Response**:
  - `201 Created`: Menu item added successfully.
  - `500 Internal Server Error`: If there is a server error.

### Delete Menu Item

Allow the user to delete a particular menu item identified by its ID from a specific restaurant.

- **URL**: `DELETE /api/restaurants/:id/menu/:itemId`
- **Response**:
  - `202 Accepted`: Menu item deleted successfully.
  - `500 Internal Server Error`: If there is a server error.

### Place Order

Allow the user to place an order.

- **URL**: `POST /api/orders`
- **Response**:
  - `201 Created`: Order placed successfully.
  - `500 Internal Server Error`: If there is a server error.

### Get Order by ID

Return the details of a specific order identified by its ID. (Populate all the details)

- **URL**: `GET /api/orders/:id`
- **Response**:
  - `200 OK`: Returns the details of the specific order.
  - `500 Internal Server Error`: If there is a server error.

### Update Order Status

Allow users to update the status of a specific order identified by its ID.

- **URL**: `PUT /api/orders/:id`
- **Response**:
  - `204 No Content`: Order status updated successfully.
  - `500 Internal Server Error`: If there is a server error.
