function printMatrix(rowColCount) {
    for (let i = 0; i < rowColCount; i++) {
        const createRow = num => new Array(num).fill(num).join(' ');

        console.log(createRow(rowColCount));
    }
}


// test code

printMatrix(3);
console.log('----------------');
printMatrix(7);
console.log('----------------');
printMatrix(2);