function calculateOddAndEvenSum(number) {
    const numberString = number.toString();
    const digits = numberString.split('').map(Number);

    const sumOddDigits = digits
            .filter(num => num % 2 !== 0)
            .reduce((sum, num) => sum + num, 0);
    
    const sumEvenDigits = digits
            .filter(num => num % 2 === 0)
            .reduce((sum, num) => sum + num, 0);

    console.log(`Odd sum = ${sumOddDigits}, Even sum = ${sumEvenDigits}`);
}


// test code

calculateOddAndEvenSum(1000435);
calculateOddAndEvenSum(3495892137259234);