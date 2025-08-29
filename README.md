# Estrutura do projeto

├── backend
│   ├── rotas
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
├── docker-compose.yml
│   ├── package.json
│   ├── package-lock.json
└── README.md

# Descrição:

Este projeto é uma aplicação web simples construída em Node.js com Docker, composta pelo backend e frontend.

## Backend

O backend fornece uma API REST com três rotas:
POST /greet: Recebe um nome X, armazena e retorna Olá, X!.
GET /recent: Retorna os últimos 10 nomes recebidos.
POST /clear: Limpa a lista de nomes recentes.

## Frontend

Interface web simples para interação com a API backend, permitindo enviar nomes, ver a lista recente e limpar a lista.

## Dependencias

### Backend
- express
- cors

### Frontend
- react
- axios

# Como rodar

## Usando Docker Compose

- No diretório raiz do projeto, execute: "docker-compose up --build"

 -O backend estará disponível em http://localhost:8000 e o frontend em http://localhost:3000. 