# Instagram Rest API CRUD

## 👩‍👧‍👦 Users
| Resource | Method    | Endpoint                                                    | Status Code |    Response     |
|:--------:|:---------:|-------------------------------------------------------------|:-----------:|:---------------:|
| Users    |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     200     | Array of object |
| User     |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Object          |
| User     |  POST     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users    |     201     | Created object  |
| User     |  PUT      | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Created object  |
| User     |  DELETE   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Deleted object  |

> Body (POST / PUT):
```json
{
    "name": "string",
    "avatar": "string",
    "username": "string",
    "email": "string"
}
```

## 💬 Posts
| Resource | Method  | Endpoint                                                               | Status Code | Response        |
|:--------:|:-------:|------------------------------------------------------------------------|-------------|-----------------|
| Posts    |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     200     | Array of object |
| Post     |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Object          |
| Post     |  POST   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     201     | Created object  |
| Post     |  PUT    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Created object  |
| Post     |  DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Created object  |

> Body (POST / PUT):
```json
{
    "userId": "string",
    "imageUrl": "string"
}
``` 
