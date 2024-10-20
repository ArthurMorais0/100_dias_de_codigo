import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskListAPI from './components/TaskListAPI';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  // Função para buscar tarefas do backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para adicionar uma nova tarefa
  const addTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/tasks', {
        title: newTask.title,
        description: newTask.description,
      });
      setTasks([...tasks, response.data]); // Atualiza a lista de tarefas
      setNewTask({ title: '', description: '' }); // Limpa o formulário
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Descrição"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          required
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <TaskListAPI tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
