let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('displayScreen').value = displayValue;
}

function appendOperator(operator) {
    if (displayValue.slice(-1) !== operator) {
        displayValue += operator;
        document.getElementById('displayScreen').value = displayValue;
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('displayScreen').value = displayValue;
    } catch (error) {
        document.getElementById('displayScreen').value = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('displayScreen').value = displayValue;
}
