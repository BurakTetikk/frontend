function add() {
    const firstNumber = document.querySelector('#firstNumber').value;
    const secondNumber = document.querySelector('#secondNumber').value;
    const sum = Number(firstNumber) + Number(secondNumber);
    document.querySelector('#result').innerText = `Result: ${sum}`;
}