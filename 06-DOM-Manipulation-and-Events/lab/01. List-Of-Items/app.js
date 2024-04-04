function addItem() {
    const itemListElement = document.getElementById('items');
    const inputTextElement = document.getElementById('newItemText');

    const newItemElement = document.createElement('li');
    newItemElement.textContent = inputTextElement.value;
    itemListElement.appendChild(newItemElement);

    inputTextElement.value = '';
}