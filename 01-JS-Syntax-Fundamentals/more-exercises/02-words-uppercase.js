function extractWordsAndConvertToUpperCase(text) {
    const words = text.split(/\W+/);
    let upperCaseWords = words.map(word => word.toUpperCase()).join(', ');

    if (upperCaseWords.endsWith(', ')) {
        upperCaseWords = upperCaseWords.slice(0, -2);
    }

    console.log(upperCaseWords);
}


// test code

extractWordsAndConvertToUpperCase('Hi, how are you?');
extractWordsAndConvertToUpperCase('hello');