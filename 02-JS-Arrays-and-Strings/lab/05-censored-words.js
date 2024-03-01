function replaceWords(text, word) {
    for (let currentWord of text) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}


// test code

replaceWords('A small sentence with some words', 'small');
replaceWords('Find the hidden word', 'hidden');