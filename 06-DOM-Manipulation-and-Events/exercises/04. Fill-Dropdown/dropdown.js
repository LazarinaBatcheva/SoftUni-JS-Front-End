function addItem() {
    const newItemElement = document.getElementById('newItemText');
    const newValueElement = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');

    const optionElement = document.createElement('option');
    optionElement.textContent = newItemElement.value;
    optionElement.value = newValueElement.value;

    selectElement.appendChild(optionElement);

    newItemElement.value = '';
    newValueElement.value = '';
}