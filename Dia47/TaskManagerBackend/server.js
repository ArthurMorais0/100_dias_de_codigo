const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = [];

// Obter todas as tarefas com filtro opcional
app.get('/api/tasks', (req, res) => {
  const { status } = req.query;
  let filteredTasks = tasks;

  if (status) {
    filteredTasks = tasks.filter(task => task.status === status);
  }

  res.json(filteredTasks);
});

// Adicionar uma nova tarefa
app.post('/api/tasks', (req, res) => {
  const { title, description, status } = req.body;
  const newTask = { id: Date.now(), title, description, status: status || 'pending' };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Atualizar o status de uma tarefa
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = tasks.find(task => task.id == id);
  
  if (task) {
    task.status = status;
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: 'Tarefa não encontrada' });
  }
});

// Deletar uma tarefa
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.status(200).json({ message: 'Tarefa deletada com sucesso' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
