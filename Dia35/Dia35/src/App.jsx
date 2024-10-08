import { useState } from 'react'
import './App.css'

const Counter = () => {
  // Definindo o estado inicial do contador como 0
  const [count, setCount] = useState(0);

  // Função para incrementar o contador
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o contador
  const decrement = () => {
    setCount(count - 1);
  };

  // Função para resetar o contador
  const reset = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
};

export default Counter;

