# Food Delivery App API Documentation

This document provides detailed information about the APIs available in the Food Delivery App backend.

## Authentication

The Food Delivery App uses JSON Web Tokens (JWT) for authentication. Users need to register and login to access protected routes.


## Endpoints

### Register User

This endpoint allows users to register. The password is hashed before storing.

- **URL**: `POST /api/register`
- **Response:**
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: If the request body is invalid.
  - `500 Internal Server Error`: If there is a server error.

### Login User

This endpoint allows users to login. Returns a JWT token on successful login.

- **URL**: `POST /api/login`
- **Response:**
  - `201 Created`: Login successful. Returns JWT token.
  - `400 Bad Request`: If the email or password is incorrect.
  - `500 Internal Server Error`: If there is a server error.

### Reset Password

This endpoint allows users to reset their password.

- **URL**: `PUT /api/user/:id/reset`
- **Request Body:**
  ```json
  {
    "currentPassword": "currentpassword123",
    "newPassword": "newpassword123"
  }
```

