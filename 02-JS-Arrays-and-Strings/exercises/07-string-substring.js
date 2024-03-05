function findWord(word, text) {
    let wordsInText = text.split(' ');

    for (let currentWord of wordsInText) {
        if (currentWord.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}


// test code

findWord('javascript',
'JavaScript is the best programming language'
);
findWord('python',
'JavaScript is the best programming language'
);