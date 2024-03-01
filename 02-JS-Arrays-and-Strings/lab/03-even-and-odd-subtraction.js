function calculateOddEvenNumbers(numbersArray) {
    let result = numbersArray.reduce((sum, num) => num % 2 === 0 ? sum + num : sum - num, 0);

    console.log(result);
}


// test code

calculateOddEvenNumbers([1,2,3,4,5,6]);
calculateOddEvenNumbers([3,5,7,9]);
calculateOddEvenNumbers([2,4,6,8,10]);