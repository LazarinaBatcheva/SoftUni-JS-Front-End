function rotationNumbers(array, rotationCount) {
    for (let i = 0; i < rotationCount; i++) {
        array.push(array.shift());
    }

    console.log(array.join(' '));
}


// test code

rotationNumbers([51, 47, 32, 61, 21], 2);
rotationNumbers([32, 21, 61, 1], 4);
rotationNumbers([2, 4, 15, 31], 5);