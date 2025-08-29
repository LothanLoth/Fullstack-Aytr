/*
Servidor Express para gerenciar rotas de nomes.

Funcionalidades:
- Integra o router principal (./rotas/router.js) para gerenciar nomes.
- Rota GET retorna mensagem de inicialização do servidor.
- Inicializa o servidor na porta 8000 (controlado por PORT).
 */

const express = require("express")
const route = require("./rotas/router.js")

const app = express()
app.use(express.json());

app.use("/", route)

const PORT = 8000

app.get("/", (req, res) => res.send("Servidor backend iniciado"));
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));