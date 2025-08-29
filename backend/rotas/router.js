/*
Router para gerenciar nomes recebidos via API.

Rotas:
POST /greet  - Recebe um nome, adiciona à lista recente e retorna "Olá, (nome)!"".
GET /recent  - Retorna os últimos 10 nomes recebidos.
POST /clear  - Limpa a lista de nomes.

 */

const { Router } = require("express");
const router = Router();

const cors = require("cors");
router.use(cors());

let names = [];

router.post("/greet", (req, res) => {
  const { name } = req.body;
  names.unshift(name);
  if (names.length > 10) names.pop();
  res.send(`Olá, ${name}!`);
});

router.get("/recent", (req, res) => {
  res.json(names);
});

router.post("/clear", (req, res) => {
  names = [];
  res.send("limpeza de dados realizada");
});

module.exports = router;
