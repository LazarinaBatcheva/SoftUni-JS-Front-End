function worksheet(startingYield) {
    const minYield = 100;
    const workersConsume = 26;
    const decreaseAmount = 10;

    let workDays = 0;
    let totalAmountOfSpice = 0; 

    while (startingYield >= minYield) {
        totalAmountOfSpice += startingYield - workersConsume;
        workDays += 1;
        startingYield -= decreaseAmount;
    }

    totalAmountOfSpice = Math.max(0, totalAmountOfSpice - workersConsume);

    console.log(workDays);
    console.log(totalAmountOfSpice);
}


// test code

worksheet(111);
console.log('---------------');
worksheet(450);