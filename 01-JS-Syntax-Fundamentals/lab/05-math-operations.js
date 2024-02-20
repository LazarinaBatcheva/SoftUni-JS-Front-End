// possible operators: '+', '-', '*', '/', '%', '**'

function mathOperations(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break
        case '-':
            console.log(num1 - num2);
            break
        case '*':
            console.log(num1 * num2);
            break
        case '/':
            if (num2 == 0) {
                break
            }
            console.log(num1 / num2);
            break
        case '%':
            if (num2 == 0) {
                break
            }
            console.log(num1 % num2);
            break
        case '**':
            console.log(num1 ** num2);
            break
    }
}


// test code

mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')