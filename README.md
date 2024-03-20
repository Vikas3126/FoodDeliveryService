# Food Delivery App API Documentation

This document provides detailed information about the APIs available in the Food Delivery App backend.

## Authentication

The Food Delivery App uses JSON Web Tokens (JWT) for authentication. Users need to register and login to access protected routes.

### Register User

**POST /api/register**

Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": {
    "street": "123 Main St",
    "city": "City",
    "state": "State",
    "country": "Country",
    "zip": "12345"
  }
}
