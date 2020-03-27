# Instagram Rest API CRUD

## Usuários
### 👨‍👧‍👦 Pegar usuários / usuário:
| Resource | Method | Endpoint                                                     | Status Code | Response        |
|:--------:|:------:|--------------------------------------------------------------|-------------|-----------------|
| Users    |   GET  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     200     | Array of object |
| User     |   GET  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Object          |

#### 👶 Criar usuário:
| Resource | Method | Endpoint                                                 | Status Code |    Response    |
|:--------:|:------:|----------------------------------------------------------|:-----------:|:--------------:|
| User     |  POST  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users |     201     | Created object |

> Estrutura do Body (payload):
```json
{
    "name": "string",
    "avatar": "string",
    "username": "string",
    "email": "string"
}
```

### 💇‍♂️ Atualizar usuário:
| Resource | Method | Endpoint                                                    | Status Code |    Response    |
|:--------:|:------:|-------------------------------------------------------------|:-----------:|:--------------:|
| User     |  PUT   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Created object |

> Estrutura do Body (payload):
```json
{
    "name": "string",
    "avatar": "string",
    "username": "string",
    "email": "string"
}
```

### 💀 Excluir usuário:
| Resource |   Method  | Endpoint                                                    | Status Code |    Response    |
|:--------:|:---------:|-------------------------------------------------------------|:-----------:|:--------------:|
| User     |  DELETE   | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Deleted object |

## Posts
### 👨‍👧‍👦 Pegar posts / post:
| Resource | Method | Endpoint                                                               | Status Code | Response        |
|:--------:|:------:|------------------------------------------------------------------------|-------------|-----------------|
| POSTS    |   GET  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts     |     200     | Array of object |
| POST     |   GET  | https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id/posts/:id |     200     | Object          |
