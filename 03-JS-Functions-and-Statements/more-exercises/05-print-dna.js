function printDNAHelix(length) {
    const sequence = 'ATCGTTAGGG';

    let symbolIndex = 0;

    for (let i = symbolIndex; i < length; i++) {
        let symbol = sequence[symbolIndex];
        symbolIndex = (symbolIndex + 1) % sequence.length;

        if (i % 4 === 0) {
            console.log(`**${symbol}${sequence[symbolIndex]}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${symbol}--${sequence[symbolIndex]}*`);
        } else {
            console.log(`${symbol}----${sequence[symbolIndex]}`);
        }

        symbolIndex = (symbolIndex + 1) % sequence.length;
    }
}

// test code

printDNAHelix(4);
console.log();
printDNAHelix(10);