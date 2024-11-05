const express = require('express');
const app = express();

// Variáveis de ambiente
const PORT = process.env.WEB_PORT || 3001;
const DB_NAME = process.env.DB_NAME || 'defaultdb';
const DB_PORT = process.env.DB_PORT || 5433;

app.get('/', (req, res) => {
  res.send(`
    <h1>Configurações da aplicação</h1>
    <p>Banco de dados: ${DB_NAME}</p>
    <p>Porta do banco de dados: ${DB_PORT}</p>
    <p>Porta da aplicação: ${PORT}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
