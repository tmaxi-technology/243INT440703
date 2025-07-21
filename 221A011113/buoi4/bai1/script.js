const display = document.getElementById('display');
let current = '0';
let operator = '';
let operand = null;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const val = button.textContent;

    if (!isNaN(val) || val === '.') {
      if (current === '0') current = val;
      else current += val;
    } else if (val === 'C') {
      current = '0';
      operand = null;
      operator = '';
    } else if (val === '⌫') {
      current = current.slice(0, -1) || '0';
    } else if (val === '+/-') {
      current = String(parseFloat(current) * -1);
    } else if (['+', '-', '*', '/'].includes(val)) {
      operand = parseFloat(current);
      operator = val;
      current = '0';
    } else if (val === '=') {
      if (operator && operand !== null) {
        const result = eval(`${operand} ${operator} ${parseFloat(current)}`);
        current = result.toString();
        operand = null;
        operator = '';
      }
    } else if (val === 'x²') {
      current = (parseFloat(current) ** 2).toString();
    } else if (val === '√x') {
      current = Math.sqrt(parseFloat(current)).toString();
    } else if (val === '1/x') {
      current = (1 / parseFloat(current)).toString();
    } else if (val === '%') {
      current = (parseFloat(current) / 100).toString();
    }

    display.value = current;
  });
});
