const express = require('express');
const cors = require('cors');
const taskRoutes = require('./taskRoutes'); 

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
