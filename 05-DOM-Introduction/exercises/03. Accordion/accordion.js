function toggle() {
    const buttonElement = document.getElementsByClassName('button')[0];
    const hiddenTextElement = document.getElementById('extra');

    const buttonText = buttonElement.textContent;

    if (buttonText === 'More') {
        hiddenTextElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        hiddenTextElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}