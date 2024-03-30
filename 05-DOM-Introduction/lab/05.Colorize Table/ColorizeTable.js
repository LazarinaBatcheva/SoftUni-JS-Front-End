function colorize() {
    const evenRowElements = document.querySelectorAll('table tr:nth-child(even)');

    for (let row of evenRowElements) {
        row.style.backgroundColor = 'teal';
    }
}