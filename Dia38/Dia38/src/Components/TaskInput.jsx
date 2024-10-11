import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
<div className="h-screen flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-lg p-6 bg-white rounded-xl shadow-2xl transform hover:shadow-3xl transition-shadow duration-300 ease-in-out">
    <h1 className="text-4xl font-extrabold text-center mb-5 text-gray-800 tracking-tight hover:text-blue-500 transition-colors duration-300">
      Quadro de Tarefas
    </h1>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 w-full"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite sua tarefa..."
        className="w-full md:w-auto border-2 border-transparent bg-gray-100 rounded-lg p-3 shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-4 py-2 shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Adicionar Tarefa
      </button>
    </form>
  </div>
</div>

  );
}

export default TaskInput;
