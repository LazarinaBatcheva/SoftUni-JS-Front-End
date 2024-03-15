function printFactorialDivision(num1, num2) {
    const result = calculateFactorial(num1) / calculateFactorial(num2);

    function calculateFactorial(number) {
        if (number < 1) {
            return 1;
        }

        return number * (calculateFactorial(number - 1));
    }

    console.log(result.toFixed(2));
}


// test code

printFactorialDivision(5, 2);
printFactorialDivision(6, 2);