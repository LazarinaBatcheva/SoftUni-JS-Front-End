function replaceWords(words, text) {
    let wordsForReplace = words.split(', ');
    let wordsInText = text.split(' ');

    for (let i = 0; i < wordsInText.length; i++) {
        let currentWord = wordsInText[i];

        if (/^\*+$/.test(currentWord)) {
            for (let word of wordsForReplace) {
                if (currentWord.length === word.length) {
                    wordsInText[i] = word;
                }
            }
        }
    }

    let result = wordsInText.join(' ');

    console.log(result);
}


// function replaceWords(words, text) {
//     let wordsForReplace = words.split(', ');
//     let wordsInText = text.split(' ');

//     for (let i = 0; i < wordsInText.length; i++) {
//         let currentWord = wordsInText[i];

//         if (currentWord.split('').every(element => element === '*')) {
//             for (let word of wordsForReplace) {
//                 if (currentWord.length === word.length) {
//                     wordsInText[i] = word;
//                 }
//             }
//         }
//     }

//     let result = wordsInText.join(' ');
//     console.log(result);
// } 


// test code

replaceWords('great',
'softuni is ***** place for learning new programming languages'
);
replaceWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);