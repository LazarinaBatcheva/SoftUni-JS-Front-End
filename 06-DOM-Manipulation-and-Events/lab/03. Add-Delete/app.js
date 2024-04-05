function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputTextElement.value;
    ulElement.appendChild(liElement);

    const deleteElement = document.createElement('a');
    deleteElement.textContent = '[Delete]';
    deleteElement.href = '#';
    liElement.appendChild(deleteElement);

    inputTextElement.value = '';

    deleteElement.addEventListener('click', () => liElement.remove());
}