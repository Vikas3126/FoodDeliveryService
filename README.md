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

To add this information to your README file on GitHub, follow these steps:

Open your README.md file in your code editor or GitHub repository.

Copy the API documentation provided in the previous response.

Paste the copied documentation into your README.md file.

Format the documentation using Markdown syntax for better readability and organization.

Commit and push your changes to your GitHub repository.

Here's how you can format the API documentation using Markdown:

markdown
Copy code
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
Response:

201 Created: User registered successfully.
400 Bad Request: If the request body is invalid.
500 Internal Server Error: If there is a server error.
