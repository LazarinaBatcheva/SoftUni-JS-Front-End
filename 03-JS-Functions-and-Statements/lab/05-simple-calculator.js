function calculating(num1, num2, operator) {
    const operations = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
    }

    const result = operations[operator](num1, num2);

    console.log(result);
}


// test code

calculating(5,
    5,
    'multiply'
    );
calculating(40,
    8,
    'divide'
    );
calculating(12,
    19,
    'add'
    );
calculating(50,
    13,
    'subtract'
    );