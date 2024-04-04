function deleteByEmail() {
    const trElements = document.querySelectorAll('table tbody tr');
    const inputElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');

    const foundElement = Array.from(trElements)
        .find(trElement => trElement.children[1].textContent.includes(inputElement.value));

    if (foundElement) {
        foundElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }

    inputElement.value = '';
}