# Appointment API

## POST /appointment

Create new appointment.

* Request Param
```
id: string
```

* Request Body JSON
```json
{
  "date": "string",
  "startTime": "number",
  "endTime": "number",
  "name": "string",
  "description": "string",
  "color": "string"
}
```

## GET /appointment

Get appointments of a week.

* Request Param
```
id: string
week: number
```

* Response JSON
```json
{
  "list": "array",
  "matrix": "array"
}
```
