function sumOfFirstAndLastNum(numbersArray) {
    let sum = numbersArray.shift() + numbersArray.pop();

    console.log(sum);
}


// test code

sumOfFirstAndLastNum([20, 30, 40]);
sumOfFirstAndLastNum([10, 17, 22, 33]);
sumOfFirstAndLastNum([11, 58, 69]);