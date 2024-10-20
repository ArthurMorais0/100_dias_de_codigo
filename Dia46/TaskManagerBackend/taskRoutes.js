const express = require('express');
const router = express.Router();
const { getTasks, addTask, deleteTask } = require('./taskController');

// Rota para obter todas as tarefas
router.get('/', getTasks);

// Rota para adicionar uma nova tarefa
router.post('/', addTask);

// Rota para deletar uma tarefa
router.delete('/:id', deleteTask);

module.exports = router;
