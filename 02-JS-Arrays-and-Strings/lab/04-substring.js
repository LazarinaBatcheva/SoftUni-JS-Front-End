function substring(string, startIndex, elementsCount) {
    let result = string.substring(startIndex, startIndex + elementsCount);

    console.log(result);
}


// test code

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);