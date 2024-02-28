function showNumsAndSum(num1, num2) {
    let numbers = '';
    let numsSum = 0;

    for (let i = num1; i <= num2; i++) {
        numbers += i + ' ';
        numsSum += i;
    }

    console.log(numbers.trim());
    console.log(`Sum: ${numsSum}`);
}


// test code

showNumsAndSum(5, 10);
showNumsAndSum(0, 26);
showNumsAndSum(50, 60);