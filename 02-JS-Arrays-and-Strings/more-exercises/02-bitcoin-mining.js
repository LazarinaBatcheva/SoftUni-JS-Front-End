function calculteBitcoin(amountsOfGold) {
    const pricePerBitcoin = 11949.16;
    const pricePerGramGold = 67.51;

    let totalAmountOfMoney = 0;
    let bitcoinCounter = 0;
    let dayOfFirstPurchasedBitcoin = 0;

    for (let i = 0; i < amountsOfGold.length; i++) {
        let dailyGold = amountsOfGold[i];
        let day = i + 1;
        
        if (day % 3 === 0) {
            dailyGold *= 0.70;
        }

        totalAmountOfMoney += dailyGold * pricePerGramGold;
        
        if (totalAmountOfMoney >= pricePerBitcoin) {
            if (dayOfFirstPurchasedBitcoin === 0) {
                dayOfFirstPurchasedBitcoin = day;
            }

            while (totalAmountOfMoney >= pricePerBitcoin) {
                bitcoinCounter += 1;
                totalAmountOfMoney -= pricePerBitcoin;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinCounter}`);

    if (dayOfFirstPurchasedBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin}`);
    }

    console.log(`Left money: ${totalAmountOfMoney.toFixed(2)} lv.`);
}


// test code

calculteBitcoin([100, 200, 300]);
console.log('------------------------');
calculteBitcoin([50, 100]);
console.log('------------------------');
calculteBitcoin([3124.15, 504.212, 2511.124]);