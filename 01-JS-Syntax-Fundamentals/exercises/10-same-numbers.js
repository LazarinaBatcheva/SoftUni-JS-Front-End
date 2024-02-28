function sameNumbers(numbers) {
    numbers = numbers.toString().split('').map(Number)
    let sumNums = 0;
    let isSame = true;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[numbers.length - 1] !== numbers[i]) {
            isSame = false;
        }
        sumNums += numbers[i];
    }

    console.log(isSame);
    console.log(sumNums);
}


// test code

sameNumbers(2222222);
sameNumbers(1234);