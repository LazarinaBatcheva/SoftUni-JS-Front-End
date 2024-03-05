function printNthElements(array, step) {
    let result = array.filter((el, index) => index % step === 0);

    return result
}


// test code

console.log(printNthElements(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(printNthElements(['dsa',
'asd', 
'test', 
'tset'], 
2

));
console.log(printNthElements(['1', 
'2',
'3', 
'4', 
'5'], 
6
));