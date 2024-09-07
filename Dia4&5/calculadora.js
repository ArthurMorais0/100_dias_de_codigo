function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert('Insira números válidos');
      return;
    }
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          alert('Não é possível dividir por zero');
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
  
    document.getElementById('result').textContent = result;
  }
  