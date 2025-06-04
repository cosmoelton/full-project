# 📦 Full-Project - Autenticação com JavaScript Full Stack

Este projeto é uma aplicação **Full Stack** utilizando **JavaScript**, com as tecnologias **React**, **Node.js**, **Express**, **JWT**, **Bcrypt** e **PostgreSQL**, focada em autenticação segura de usuários.

## 🧩 Tecnologias Utilizadas

- **Frontend:**
  - React
  - JavaScript
  - Axios
  - Context API (se aplicável)

- **Backend:**
  - Node.js
  - Express.js
  - Bcrypt (para hashing de senhas)
  - JSON Web Token (JWT) – com expiração de 1 dia
  - PostgreSQL

## 🔐 Funcionalidades de Autenticação

- Cadastro de usuário com senha criptografada usando **Bcrypt**
- Login com geração de **JWT token**
- Token com **duração de 1 dia**
- Proteção de rotas com middleware de autenticação
- CRUD básico de usuários
- Middleware de autorização via JWT

### 📦 Estrutura de Pastas

```
projeto-full-stack-auth-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── .env
└── README.md
```

🔐 Funcionalidades

    Registro de usuários com hash de senha usando Bcrypt

    Login e autenticação via JWT com validade de 1 dia

    Rotas protegidas com middleware de autenticação

    CRUD básico para usuários (listagem, atualização, exclusão)

    Estrutura modularizada com routers e controllers

    ``bash
/api/users/register   → Criação de novo usuário
/api/users/login      → Login e geração de token  
/api/users/:id        → Atualização ou deleção de usuário (protegido)  
/api/users/           → Listagem de usuários (protegido)

📬 Contato

Para dúvidas ou sugestões, entre em contato:
COSMO ELTON

🚧 Status

Projeto em desenvolvimento.
