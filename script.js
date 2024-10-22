let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('result').value = '';
}
