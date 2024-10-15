const express = require('express');
const app = express();
const port = 3000; // Defina a porta em que o servidor vai rodar

// Middleware para tratar dados de formulários (JSON ou URL-encoded)
app.use(express.json());


// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Express!');
});

// Rota para retornar dados
app.get('/dados', (req, res) => {
  const exemploDados = {
    nome: 'Projeto Express',
    versao: '1.0.0'
  };
  res.json(exemploDados);
});

// Rota POST para enviar dados
app.post('/enviar', (req, res) => {
  const { nome, mensagem } = req.body;
  res.send(`Nome: ${nome}, Mensagem: ${mensagem}`);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
