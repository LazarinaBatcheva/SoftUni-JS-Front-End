function sumTable() {
    const tdNumberElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    const sumElement = document.getElementById('sum');

    sumElement.textContent = Array.from(tdNumberElements)
                                .reduce((sum, el) => sum + Number(el.textContent), 0);
}