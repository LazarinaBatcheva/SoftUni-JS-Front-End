function calc() {
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const sumElement = document.getElementById('sum');

    sumElement.value = Number(num1Element.value) + Number(num2Element.value);
}
