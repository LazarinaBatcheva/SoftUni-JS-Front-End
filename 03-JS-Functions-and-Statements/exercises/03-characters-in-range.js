function printCharsBetween(char1, char2) {
    const charaASCII1 = char1.charCodeAt(0);
    const charaASCII2 = char2.charCodeAt(0);

    const firstChar = Math.min(charaASCII1, charaASCII2);
    const lastChar = Math.max(charaASCII1, charaASCII2);

    let result = [];

    for (i = firstChar + 1; i < lastChar; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}


// test code

printCharsBetween('a', 'd');
printCharsBetween('#', ':');
printCharsBetween('C', '#');