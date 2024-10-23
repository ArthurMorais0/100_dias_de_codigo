const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'secret_key'; 
let users = []

// Rota de cadastro
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Verificar se o usuário já existe
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(409).json({ message: 'Usuário já cadastrado!' });
  }

  // Criptografar a senha e salvar o usuário
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  res.json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Usuário não encontrado!' });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Senha incorreta!' });
  }

  // Gerar token JWT
  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login bem-sucedido!', token });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

