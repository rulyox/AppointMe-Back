# User API

## POST /user/token

Check login and create token.

* Request Body JSON
```json
{
  "id": "string",
  "pw": "string"
}
```

* Response JSON
```json
{
  "token": "string"
}
```

## GET /user

Login using token.

* Request Header
```
token: string
```

* Response JSON
```json
{
  "id": "string"
}
```

## POST /user

Sign up.

* Request Body JSON
```json
{
  "id": "string",
  "name": "string",
  "pw": "string"
}
```

## GET /user/data

Get user data.

* Request Param
```
id: string
```

* Response JSON
```json
{
  "name": "string"
}
```
