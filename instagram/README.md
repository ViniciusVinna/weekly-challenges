# Instagram Rest API CRUD

## 👩‍👧‍👦 USUÁRIOS
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

## 🖼️ POSTS
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

## 💬 COMENTÁRIOS
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

## Query Params
> Adicione os seguintes **queries** às requisições `GET`:
> ### Paginação
> `?page=1&limit=10` ou `?p=1&l=10`
>
> ### Ordenação

## Ordenação
Add query params to GET requests:

/blogs?sortBy=createdAt&order=desc
Alternatively you can use sortby, orderBy, or orderby
Note: if you omit order parameter, the default order will be 'asc'
SEARCHING
Add query params to GET requests:

/blogs?search=blog1
or /blogs?filter=blog1
RETURN CODES AND ERRORS
Mock APIs can return the following HTTP codes which needs to be checked by the end user:

200 - OK
201 - OK
404 - Not found
500 - Server error
