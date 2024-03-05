function sortingNumbers(arrayNumbers) {
    let result = [];

    arrayNumbers = arrayNumbers.sort((a, b) => a - b);

    while (arrayNumbers.length > 0) {
        result.push(arrayNumbers.shift());
        if (arrayNumbers.length > 0) {
            result.push(arrayNumbers.pop());
        }
    }
    
    return result;
}


// test code

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));