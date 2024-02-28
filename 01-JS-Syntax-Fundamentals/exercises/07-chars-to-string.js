function concatenateChars(...chars) {
    let result = '';

    for (let i = 0; i < chars.length; i++) {
        result += chars[i];
    }

    console.log(result);
}


// test code

concatenateChars('a', 'b', 'c');
concatenateChars('%', '2', 'o');
concatenateChars('1', '5', 'p');