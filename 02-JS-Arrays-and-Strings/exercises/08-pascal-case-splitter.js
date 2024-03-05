function wordsSplitter(text) {
    let words = text.split(/(?=[A-Z])/);
    
    console.log(words.join(', '));
}


// test code

wordsSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('-----------------------');
wordsSplitter('HoldTheDoor');
console.log('-----------------------');
wordsSplitter('ThisIsSoAnnoyingToDo');