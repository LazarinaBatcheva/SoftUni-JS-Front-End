function findAndPrintRepeatedWords(wordsList) {
    const searchedWords = wordsList.shift().split(' ');
    const repeatedWords = {};

    for (const word of searchedWords) {
        repeatedWords[word] = 0;
    }

    for (const word of wordsList) {
        if (repeatedWords.hasOwnProperty(word)) {
            repeatedWords[word] += 1;
        }
    }
    
    Object
        .entries(repeatedWords)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(`${word} - ${count}`));
}


// test code

findAndPrintRepeatedWords([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

console.log();

findAndPrintRepeatedWords([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
