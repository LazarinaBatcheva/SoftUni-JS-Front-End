function subtract() {
    const firstElement = document.getElementById('firstNumber');
    const secondElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    firstNumber = Number(firstElement.value);
    secondNumber = Number(secondElement.value);

    resultElement.textContent = firstNumber - secondNumber;

    console.log(resultElement);
}