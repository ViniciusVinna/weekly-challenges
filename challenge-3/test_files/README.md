# SPA: App de Contatos - PARTE 1

## Objetivo:
O desafio é desenvolver um *SPA (Single Page Application)* de uma lista de contatos em **React** com as seguintes funcionalidades:

-  Consumir os dados de contato através de uma API Rest, usando a *Fetch API* do Javascript.
-  Busca de um contato aplicando filtro em **tempo real**.
-  Aplicar filtros de ordenação por *Nome*, *País*, *Empresa*, *Departamento* e *Data de Admissão*.

### API de Contatos:

GET: *https://5f074ac59c5c250016306ca1.mockapi.io/api/v1/contacts*

### Requisitos - Parte 1:

- Modularize os componentes na pasta components.
- Atualize os arquivos de componentes carregando corretamente seus estilos e suas marcações JSX.


### Iniciar o projeto:

- Instale as dependências do projeto com o comando *yarn install* ou *npm install*.
- Inicie o projeto com comando *yarn start* ou *npm start* / *npm run start*.

**Preview:**

[Contacts SPA](https://vimeo.com/414861574/cb0d443103)

## Tópicos:

Neste desafio você vai praticar os seus conhecimentos em:

- **React**
- **Modularização**

## ‼️ Atributos `data-testid` Obrigatórios:
Para que seu teste seja avaliado corretamente na plataforma é necessário que os `Componentes` tenham tenham os atributos `data-testid` atribuídos da seguinte forma:

```bash
├── App.jsx  ➡️  data-testid="app"
└── components
    ├── Contact.jsx   ➡️  data-testid="contact"
    ├── Contacts.jsx   ➡️  data-testid="filters"
    ├── Filters.jsx   ➡️  data-testid="filters"
    └── Topbar.jsx   ➡️  data-testid="topbar"
```

## Requisitos:

* **[Node v13.8.0](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
* **[Create React App](https://github.com/facebook/create-react-app)**

## Screenshot de Referência

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/react-14/screenshot.png)
