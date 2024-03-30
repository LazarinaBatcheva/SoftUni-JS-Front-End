function printInfo(string) {
    const stringInObj = JSON.parse(string);

    Object
        .keys(stringInObj)
        .forEach(key => console.log(`${key}: ${stringInObj[key]}`));
}


// test code

printInfo('{"name": "George", "age": 40, "town": "Sofia"}');
console.log();
printInfo('{"name": "Peter", "age": 35, "town": "Plovdiv"}');