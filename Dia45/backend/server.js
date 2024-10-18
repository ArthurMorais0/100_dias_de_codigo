const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware para lidar com JSON
app.use(express.json());
app.use(cors());

// Conexão com o banco de dados SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

// Criação da tabela 'users'
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
)`);

// Rota para pegar todos os usuários
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Rota para adicionar um novo usuário
app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.run(query, [name, email, password], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ id: this.lastID });
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
