function printElements(elementsCount, numbersArray) {
    let elements = numbersArray.slice(0, elementsCount).reverse();

    console.log(elements.join(' '));
}


// test code

printElements(3, [10, 20, 30, 40, 50]);
printElements(4, [-1, 20, 99, 5]);
printElements(2, [66, 43, 75, 89, 47]);