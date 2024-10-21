const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware para parsear dados do formulário (body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para exibir o formulário
app.get('/', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <button type="submit">Submit</button>
        </form>
    `);
});

// Endpoint para receber dados do formulário via POST
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.send(`Dados recebidos Name: ${name}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
