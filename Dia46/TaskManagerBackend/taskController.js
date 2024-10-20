let tasks = [];

// Obter todas as tarefas
const getTasks = (req, res) => {
  res.json(tasks);
};

// Adicionar uma nova tarefa
const addTask = (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: Date.now(), title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Deletar uma tarefa
const deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id != id);
  res.status(200).json({ message: 'Tarefa deletada com sucesso' });
};

module.exports = { getTasks, addTask, deleteTask };
