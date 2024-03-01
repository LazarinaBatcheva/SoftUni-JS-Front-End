function wordCounter(text, searchingWord) {
    let result = text.split(' ').filter(word => word === searchingWord).length;

    console.log(result);
}


// test code

wordCounter('This is a word and it also is a sentence', 'is');
wordCounter('softuni is great place for learning new programming languages', 'softuni');