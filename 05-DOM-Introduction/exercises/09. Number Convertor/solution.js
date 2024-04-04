function solve() {
    const inputElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    const binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';

    selectMenuToElement.appendChild(binaryOptionElement);
    selectMenuToElement.appendChild(hexadecimalOptionElement);

    convertButtonElement.addEventListener('click', () => {
        const inputNumber = Number(inputElement.value);
        const selectToMenu = selectMenuToElement.value;

        let result;

        if (selectToMenu === 'binary') {
            result = inputNumber.toString(2);
        } else {
            result = inputNumber.toString(16).toUpperCase();
        }

        resultElement.value = result;
    });
}