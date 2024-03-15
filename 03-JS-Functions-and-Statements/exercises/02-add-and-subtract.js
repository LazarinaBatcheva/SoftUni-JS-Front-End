function addAndSubtractNumbers(num1, num2, num3) {
    let sumNumbers = sum(num1, num2);
    let result = subtract(sumNumbers, num3);

    function sum(a, b) {
        return a + b;
    }

    function subtract(sumNumbers, c) {
        return sumNumbers - c;
    }

    console.log(result);
}


// test code

addAndSubtractNumbers(23, 6, 10);
addAndSubtractNumbers(1, 17, 30);
addAndSubtractNumbers(42, 58, 100);