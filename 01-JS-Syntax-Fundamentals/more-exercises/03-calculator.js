function calculator(num1, command, num2) {
    let result = 0;

    switch (command) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    console.log(result.toFixed(2));
}


// test code

calculator(5, '+', 10);
calculator(25.5, '-', 3);