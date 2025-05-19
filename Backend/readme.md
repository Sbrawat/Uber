# Backend API Documentation

## Endpoints

### POST `/user/register` Endpoint

This endpoint is used to register a new user.

#### Request Body

The request body must be sent in JSON format and include the following fields:

| Field               | Type   | Required | Description                                   |
|---------------------|--------|----------|-----------------------------------------------|
| `fullname.firstname`| String | Yes      | The first name of the user (min 3 characters).|
| `fullname.lastname` | String | No       | The last name of the user (min 3 characters). |
| `email`             | String | Yes      | The email address of the user (must be valid).|
| `password`          | String | Yes      | The password for the user (min 6 characters). |

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```
# Responses


| Status Code |	Description |
|-------------|-------------|
| `201` |	User successfully registered. Returns a JSON object with a token and user. |
| `400` |	Validation error. Returns a JSON object with an array of validation errors. |
| `500`	| Internal server error. |

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2e5b5d6c2a1b8e4f123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### POST `/user/login` 

This endpoint is used to log in an existing user.

#### Request Body

The request body must be sent in JSON format and include the following fields:

| Field               | Type   | Required | Description                                   |
|---------------------|--------|----------|-----------------------------------------------|
| `email`             | String | Yes      | The email address of the user (must be valid).|
| `password`          | String | Yes      | The password for the user (min 6 characters). |

#### Example Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### Responses

| Status Code |	Description |
|-------------|-------------|
| `200` |	User successfully logged in. Returns a JSON object with a token and user. |
| `400` |	Validation error. Returns a JSON object with an array of validation errors. |
| `401`	| Invalid email or password. |
| `500`	| Internal server error. |

### Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64f1c2e5b5d6c2a1b8e4f123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```
### Example Error Response

```json
{
  "message": "Invalid email or password"
}
```
### GET `/user/profile`

This endpoint is used to retrieve the authenticated user's profile information.

#### Headers Required

| Field           | Type   | Required | Description                              |
|-----------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | Bearer token received during login       |

#### Responses

| Status Code | Description                                                    |
|------------|----------------------------------------------------------------|
| `200`      | Success. Returns a JSON object with user profile information.   |
| `401`      | Unauthorized. Token is missing or invalid.                      |
| `500`      | Internal server error.                                         |

#### Success Response

```json
{
  "user": {
    "_id": "64f1c2e5b5d6c2a1b8e4f123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

### POST `/user/logout`

This endpoint is used to logout the current user. It invalidates the current session token.

#### Headers Required

| Field           | Type   | Required | Description                              |
|-----------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | Bearer token received during login       |

#### Responses

| Status Code | Description                                                    |
|------------|----------------------------------------------------------------|
| `200`      | Successfully logged out.                                        |
| `401`      | Unauthorized. Token is missing or invalid.                      |
| `500`      | Internal server error.                                         |

#### Success Response

```json
{
  "message": "Successfully logged out"
}
```
