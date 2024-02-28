function multiplicationNumbers(number) {
    let timesLimit = 10;

    for (let i = 1; i <= timesLimit; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}


// test code

multiplicationNumbers(5);
multiplicationNumbers(2);