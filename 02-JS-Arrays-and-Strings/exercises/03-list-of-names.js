function sortingNames(arrayNames) {
    arrayNames = arrayNames.sort((a, b) => a.localeCompare(b));

    let number = 1;
    for (let name of arrayNames) {
        console.log(`${number}.${name}`);
        number += 1;
    }
}


// test code

sortingNames(["John", "Bob", "Christina", "Ema"]);