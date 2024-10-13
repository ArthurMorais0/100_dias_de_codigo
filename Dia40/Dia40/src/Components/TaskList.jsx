function TaskList({ tasks, onDeleteTask }) {
    return (
      <ul className="mt-5">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 my-2 rounded-lg shadow-md text-gray-800 flex justify-between items-center"
          >
            <span>{task}</span>
            <button
              onClick={() => onDeleteTask(index)} // Deleta a tarefa correspondente ao índice
              className="bg-red-500 text-white rounded-lg px-3 py-1 hover:bg-red-600 transition-all"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  