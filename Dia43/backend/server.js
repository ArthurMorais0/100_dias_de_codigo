const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar dados JSON
app.use(express.json());

let tarefas = []; // Array que vai armazenar as tarefas

// Rota GET para listar todas as tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// Rota POST para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
  const { titulo, descricao } = req.body;
  const novaTarefa = {
    id: tarefas.length + 1,
    titulo,
    descricao,
    status: 'pendente'
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa); // Retorna a nova tarefa criada com status 201 (Criado)
});

// Rota PUT para atualizar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, status } = req.body;
  
  const tarefa = tarefas.find(t => t.id === parseInt(id));
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  // Atualizando os campos da tarefa
  if (titulo) tarefa.titulo = titulo;
  if (descricao) tarefa.descricao = descricao;
  if (status) tarefa.status = status;

  res.json(tarefa); // Retorna a tarefa atualizada
});

// Rota DELETE para excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const index = tarefas.findIndex(t => t.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  // Removendo a tarefa do array
  tarefas.splice(index, 1);
  res.status(204).send(); // Status 204 indica sucesso, mas sem corpo de resposta
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
