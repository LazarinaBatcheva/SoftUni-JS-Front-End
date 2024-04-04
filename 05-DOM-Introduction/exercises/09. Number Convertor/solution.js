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

    const convertors = {
        binary: (number) => number.toString(2),
        hexadecimal: (number) => number.toString(16).toUpperCase(),
    };

    convertButtonElement.addEventListener('click', () => {
        const inputNumber = Number(inputElement.value);
        const selectToMenu = selectMenuToElement.value;

        resultElement.value = convertors[selectToMenu](inputNumber);
    });
}
