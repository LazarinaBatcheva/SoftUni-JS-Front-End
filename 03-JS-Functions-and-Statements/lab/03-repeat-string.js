function repeatingString(string, number) {
    let result = string.repeat(number);

    // let result = '';

    // for (i = 0; i < number; i++) {
    //     result += string
    // }

    return result
}


// test code

console.log(repeatingString("abc", 3));
console.log(repeatingString("String", 2));