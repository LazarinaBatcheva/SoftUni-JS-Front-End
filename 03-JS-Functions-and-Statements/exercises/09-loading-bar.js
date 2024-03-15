function printLoadingBar(number) {
    const result = (number) =>
            `${number}% [${'%'.repeat(number / 10)}${'.'.repeat(10 - number / 10)}]`;
    
    const isComplete = number === 100;
    
    console.log(result(number));
    console.log(isComplete ? 'Complete!' : 'Still loading...');
}


// test code

printLoadingBar(20);
printLoadingBar(50);
printLoadingBar(100);