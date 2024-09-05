const getNumber = (prompt) => {
    let num;
    while (true) {
      num = parseFloat(prompt(`Digite um número: `));
      if (!isNaN(num)) return num;
      console.log("Inválido. Tente novamente.");
    }
  };
  
  const num1 = getNumber(prompt);
  const num2 = getNumber(prompt);
  
  console.log(`A soma dos números é: ${num1 + num2}`);
  