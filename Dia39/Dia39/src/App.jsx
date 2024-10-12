import TaskInput from './Components/TaskInput';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-xl shadow-2xl transform hover:shadow-3xl transition-shadow duration-300 ease-in-out">
      <h1 className="text-4xl font-bold text-center my-5 text-gray-800"></h1>
      <TaskInput onAddTask={handleAddTask} />
      {/*Adicionar uma seção de exibição das tarefas depois */}
    </div>
  );
}

export default App;
