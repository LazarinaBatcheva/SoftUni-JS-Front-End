function printDNAHelix(num) {
    const sequence = 'ATCGTTAGGG';
    let nucleotideQueue = sequence.split("");
    let isIncreasing = false;
    let asterisksCount = 0;

    for (let i = 0; i < num; i++) {
        let firstNucleotide = nucleotideQueue .shift();
        let secondNucleotide = nucleotideQueue .shift();
        nucleotideQueue .push(firstNucleotide, secondNucleotide);

        let asterisksBefore = '*'.repeat(2 - asterisksCount);
        let dashes = '-'.repeat(2 * asterisksCount);
        let asterisksAfter = '*'.repeat(2 - asterisksCount);

        console.log(`${asterisksBefore}${firstNucleotide}${dashes}${secondNucleotide}${asterisksAfter}`);

        if (i % 2 === 0) {
            isIncreasing = !isIncreasing;
        }

        asterisksCount += isIncreasing ? 1 : -1;
    }
}

// function printDNAHelix(length) {
//     const sequence = 'ATCGTTAGGG';

//     let symbolIndex = 0;

//     for (let i = symbolIndex; i < length; i++) {
//         let symbol = sequence[symbolIndex];
//         symbolIndex = (symbolIndex + 1) % sequence.length;

//         if (i % 4 === 0) {
//             console.log(`**${symbol}${sequence[symbolIndex]}**`);
//         } else if (i % 4 === 1 || i % 4 === 3) {
//             console.log(`*${symbol}--${sequence[symbolIndex]}*`);
//         } else {
//             console.log(`${symbol}----${sequence[symbolIndex]}`);
//         }

//         symbolIndex = (symbolIndex + 1) % sequence.length;
//     }
// }

// test code

printDNAHelix(4);
console.log();
printDNAHelix(10);
