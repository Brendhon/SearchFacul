[![Build Status](https://travis-ci.com/Brendhon/SearchFacul_API.svg?branch=main)](https://travis-ci.com/Brendhon/SearchFacul_API)

<h1 align="center">Search Facul</h1>
<h1 align="center">
    <img src="src\assets\logo.svg" width="300px;" alt="logo"/>
</h1>

---

## 🎓 Sobre o projeto

O Search Facul é uma plataforma que tem como propósito facilitar a busca de informações sobre faculdades e cursos. O estudante pode em uma única plataforma: 
 - Buscar por informações de cursos em uma cidade;
 - Buscar por informações de um curso específico;
 - Buscar por cursos em uma faculdade específica.

Este repositório contêm a API do projeto **[Search Facul](https://github.com/Brendhon/SearchFacul_Web)** que tem como objetivo colocar em prática os conhecimentos adquiridos na disciplina de **C214** (Engenharia de Software) durante a graduação em Engenharia de Computação pelo **[Inatel](https://inatel.br/home/)** e dos conhecimentos adquiridos sobre desenvolvimento Web nos cursos disponibilizados pela **[COD3R](https://www.cod3r.com.br/)**.

---

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

 - **[Express](https://expressjs.com/pt-br/)**
 - **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
 - **[Nodemon](https://nodemon.io/)**
 - **[PostgreSQL](https://www.postgresql.org/)**
 - **[Knex.js](http://knexjs.org/)**
 - **[Celebrate](https://github.com/arb/celebrate)**
 - **[Jest](https://jestjs.io/)**
 - **[Cross-env](https://github.com/kentcdodds/cross-env)**
 - **[Jwt-Simple](https://github.com/hokaccha/node-jwt-simple)**
 - **[Dotenv](https://github.com/motdotla/dotenv)**
 - **[SuperTest](https://github.com/visionmedia/supertest)**
 - **[Travis CI](https://travis-ci.com/)**
 - **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)**
> Veja o arquivo  **[package.json](https://github.com/Brendhon/SearchFacul_API/blob/main/package.json)**

### Utilitários
- Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
- Teste de API:  **[Insomnia](https://insomnia.rest/)**
---
## Como executar o projeto

#### 💡 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
**[Git](https://git-scm.com)**, **[Node.js](https://nodejs.org/en/)** e **[PostgreSQL](https://www.postgresql.org/)**.<br> 

Para rodar localmente é necessário que você crie o seu banco de dados (não é necessário criar as tabelas). Logo após isso, crie um arquivo (.env) na raiz do projeto e coloque nele as informações de acesso (username, password e name) no formato demostrado abaixo: 
```
DB_NAME=<NOME_DO_BANCO>
DB_USERNAME=<USERNAME_DO_BANCO>
DB_PASSWORD=<SENHA_DO_BANCO>
```

Recomendações:
* Um editor para trabalhar com o código como **[VSCode](https://code.visualstudio.com/)**
* (Opcional) No arquivo **.env** insira um segredo de sua escolha, a variável deve ser escrita da seguinte forma:
    ```
    AUTH_SECRET=<SECRET>
    ```
    
```bash

# Clone este repositório
$ git clone https://github.com/Brendhon/SearchFacul_API.git

# Acesse a pasta do projeto

# Instale as dependências
$ npm install

```
#### ⚽ Rodando o servidor

```bash

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor iniciará na porta:3333

```

#### 🤖 Rodando os testes automatizados

```bash

# Execute os testes
$ npm test

# Será gerada uma pasta (coverage) contendo uma página com os dados dos testes de forma mais detalhada

```


---

## 👥 Autor
<img style="border-radius: 20%;" src="https://avatars1.githubusercontent.com/u/52840078?s=400&u=67bc81db89b5abf12cf592e0c610426afd3a02f4&v=4" width="120px;" alt="autor"/><br>
**Brendhon Moreira**

[![Linkedin Badge](https://img.shields.io/badge/-Brendhon-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/brendhon-moreira)](https://www.linkedin.com/in/brendhon-moreira)
[![Gmail Badge](https://img.shields.io/badge/-brendhon.e.c.m@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brendhon.e.c.m@gmail.com)](mailto:brendhon.e.c.m@gmail.com)

---
## License
**[MIT](https://choosealicense.com/licenses/mit/)**
