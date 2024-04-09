function solve() {
    const table = document.querySelector('div#exercise table');
    const tbodyTrElements = document.querySelectorAll('div#exercise table tbody tr');
    const buttonElements = document.querySelectorAll('table tfoot tr td button');
    const quickCheckButton = buttonElements[0];
    const clearButton = buttonElements[1];
    const checkMessageElement = document.querySelector('div#check p');

    function checkSudomu() {
        let isSolved = true;
        
        const numbersInRows = Array.from(tbodyTrElements)
            .map(tr => Array.from(tr.querySelectorAll('input')))
                            .map(input => Number(input.value));

        const numbersInColumns = Array.from(tbodyTrElements[0].querySelectorAll('input'))
            .map((_, index) => Array.from(tbodyTrElements)
                                    .map(tr => Number(tr.querySelectorAll('input')[index].value)));

        numbersInRows.forEach(row => {
            if (hasDuplicates(row)) {
                isSolved = false;
            }
        });

        numbersInColumns.forEach(column => {
            if (hasDuplicates(column)) {
                isSolved = false;
            }
        });

        return isSolved;
    }

    function hasDuplicates(array) {
        const counts = {};

        for (let i = 0; i < array.length; i++) {
            const num = array[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;

            if (counts[num] > 1) {
                return true;
            }
        }

        return false;
    }

    quickCheckButton.addEventListener('click', () => {
        if (checkSudomu()) {
            table.style.border = '2px solid green';
            checkMessageElement.textContent = 'You solve it! Congratulations!';
            checkMessageElement.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            checkMessageElement.textContent = 'NOP! You are not done yet...';
            checkMessageElement.style.color = 'red';
        }
    });

    clearButton.addEventListener('click', () => {
        Array.from(tbodyTrElements)
            .forEach(tr => {
                Array.from(tr.querySelectorAll('input'))
                    .forEach(input => input.value = '')
            });

        table.style.border = '';
        checkMessageElement.textContent = '';
    });
}
