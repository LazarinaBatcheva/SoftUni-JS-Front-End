function sumDigits(numbers) {
    let sumNums = 0;
    numbers = numbers.toString().split('').map(Number);

    for (let i = 0; i < numbers.length; i++) {
        sumNums += numbers[i];
    }

    console.log(sumNums);
}


// test code

sumDigits(245678);
sumDigits(97561);
sumDigits(543);