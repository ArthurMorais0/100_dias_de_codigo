import React, { useState } from 'react';

function CondicionalRender() {
  // Estado booleano para controlar a renderização
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar o estado
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder Componente' : 'Mostrar Componente'}
      </button>

      {/* Renderização condicional do componente */}
      {isVisible && (
        <div>
          <h2>Este é um componente condicional!</h2>
          <p>Ele só aparece quando o estado "isVisible" é verdadeiro.</p>
        </div>
      )}
    </div>
  );
}

export default CondicionalRender;
