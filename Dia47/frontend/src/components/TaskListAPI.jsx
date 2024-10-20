import React from 'react';
import axios from 'axios';

const TaskListAPI = ({ tasks, setTasks }) => {
  
  // Função para marcar uma tarefa como concluída
  const completeTask = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        status: 'completed',
      });
      const updatedTasks = tasks.map(task =>
        task.id === id ? response.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao completar tarefa:', error);
    }
  };

  // Função para deletar uma tarefa
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  return (
    <ul>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <li key={task.id} style={{ color: task.status === 'completed' ? 'green' : 'red' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            {task.status === 'pending' && (
              <button onClick={() => completeTask(task.id)}>Completar</button>
            )}
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
          </li>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </ul>
  );
};

export default TaskListAPI;
