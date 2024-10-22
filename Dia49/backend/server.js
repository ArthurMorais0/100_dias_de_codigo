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
        <form action="/loading" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Middleware para carregar as informações e envia-las para endpoint /submit
app.post('/loading', (req, res) => {
    const { name, email } = req.body; 
res.send(`
    <div>
            Enviando informações...
            <script>
            setTimeout(() =>{
                    window.location.href = '/submit?name=${(name)}&email=${(email)}';

                }, 3000)
            </script>
    </div>`)
    

   
});

// Endpoint para receber dados do formulário via POST
app.get('/submit', (req, res) => {
    const { name, email } = req.query;

    // Renderiza as informações recebidas
    res.send(`
        <h1>Informações Recebidas</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        
    `);
    console.log(`Name: ${name}, Email: ${email}`)
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
