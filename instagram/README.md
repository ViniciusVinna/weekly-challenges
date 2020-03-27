# Instagram Rest API CRUD

## 👩‍👧‍👦 Users
| Resource | Method    | Endpoint                                                    | Status Code |    Response     |
|:--------:|:---------:|-------------------------------------------------------------|:-----------:|:---------------:|
| Users    |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     200     | Array of Object |
| User     |  GET     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Object          |
| User     |  POST     | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users    |     201     | Created object  |
| User     |  PUT      | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Updated object  |
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

## 🖼️ Posts
| Resource | Method  | Endpoint                                                               | Status Code | Response        |
|:--------:|:-------:|------------------------------------------------------------------------|-------------|-----------------|
| Posts    |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     200     | Array of Object |
| Post     |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Object          |
| Post     |  POST   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     201     | Created object  |
| Post     |  PUT    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Updated object  |
| Post     |  DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Deleted object  |

> Body (POST / PUT):
```json
{
    "userId": "string",
    "imageUrl": "string"
}
``` 

## 💬 Comments
| Resource | Method  | Endpoint                                                                               | Status Code | Response        |
|:--------:|:-------:|----------------------------------------------------------------------------------------|-------------|-----------------|
| Comments    |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     |     200     | Array of Object |
| Comment     |  GET    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Object          |
| Comment     |  POST   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments     |     201     | Created object  |
| Comment     |  PUT    | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Updated object  |
| Comment     |  DELETE | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id/comments/:id |     200     | Deleted object  |

> Body (POST / PUT):
```json
{
    "postId": "string",
    "comment": "string",
    "avatar": "string",
    "name": "string"
}
``` 
