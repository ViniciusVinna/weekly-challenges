# Instagram Rest API CRUD

#### 👨‍👧‍👦 Pegar usuários / usuário:
| Resource | Method | Endpoint                                                    | Status Code | Response        |
|:--------:|:------:|-------------------------------------------------------------|-------------|-----------------|
| Users    |   GET  | http://5e7d0266a917d70016684219.mockapi.io/api/v1/users     |     200     | Array of object |
| User     |   GET  | http://5e7d0266a917d70016684219.mockapi.io/api/v1/users/:id |     200     | Object          |

#### 👶 Criar usuário:
| Resource | Method | Endpoint                                                | Status Code |    Response    |
|:--------:|:------:|---------------------------------------------------------|:-----------:|:--------------:|
| User     |  POST  | http://5e7d0266a917d70016684219.mockapi.io/api/v1/users |     201     | Created object |

> Estrutura do Body (payload):
```json
{
    "name": "string",
    "avatar": "string",
    "username": "string",
    "email": "string"
}
```

#### 💇‍♂️ Atualizar usuário:
| Resource | Method | Endpoint                                                   | Status Code |    Response    |
|:--------:|:------:|------------------------------------------------------------|:-----------:|:--------------:|
| User     |  PUT   | http://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Created object |

> Estrutura do Body (payload):
```json
{
    "name": "string",
    "avatar": "string",
    "username": "string",
    "email": "string"
}
```

#### 💀 Excluir usuário:
| Resource |   Method  | Endpoint                                                   | Status Code |    Response    |
|:--------:|:---------:|------------------------------------------------------------|:-----------:|:--------------:|
| User     |  DELETE   | http://5e7d0266a917d70016684219.mockapi.io/api/v1/users:id |     200     | Deleted object |
