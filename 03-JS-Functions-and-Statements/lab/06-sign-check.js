function checkingResult(numOne, numTwo, numThree) {
    const negativeNumbers = [numOne, numTwo, numThree].filter(num => num < 0);
    const isNegativeResult = negativeNumbers.length % 2 !== 0;

    if (isNegativeResult) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}


// test code

checkingResult(5, 12, -15);
checkingResult(-6, -12, 14);
checkingResult(-1, -2, -3);