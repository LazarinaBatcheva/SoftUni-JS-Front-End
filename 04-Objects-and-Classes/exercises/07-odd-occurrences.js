function printOddOccurrences(stringOfWords) {
    const words = stringOfWords.split(' ');
    const wordCounts = {};

    words.forEach(word => {
        const lowercaseWord = word.toLowerCase();
        wordCounts[lowercaseWord] = (wordCounts[lowercaseWord] || 0) + 1;
    });

    const oddWords = Object
                        .keys(wordCounts)
                        .filter(word => wordCounts[word] % 2 !== 0);
    
    console.log(oddWords.join(' '));
}


// test code

printOddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
printOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');