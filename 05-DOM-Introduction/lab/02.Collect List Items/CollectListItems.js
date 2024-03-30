function extractText() {
    const listItemsElement = document.getElementById('items');
    const textAreaElement = document.getElementById('result');

    textAreaElement.value = listItemsElement.textContent;
}