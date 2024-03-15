function findPalindromes(numbersArray) {
    for (number of numbersArray) {
        let reversedNumberString = number
                .toString()
                .split('')
                .reverse()
                .join('');

        let reversedNumber = Number(reversedNumberString);
        
        if (number === reversedNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}


// test code

findPalindromes([123,323,421,121]);
console.log('--------------');
findPalindromes([32,2,232,1010]);