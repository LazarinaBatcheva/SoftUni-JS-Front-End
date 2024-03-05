function specialWords(text) {
    let wordsInText = text.split(' ');

    for (let word of wordsInText) {
        let match = word.match(/#([A-Za-z]+)/)
        if (match) {
            console.log(match[1]);
        }
    }
}


// test code

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('-----------------');
specialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');