function printPhonebook(phoneNumbersArray) {
    const phonebook = {};

    for (let info of phoneNumbersArray) {
        let [name, number] = info.split(' ');
        phonebook[name] = number;
    }

    Object
        .keys(phonebook)
        .forEach(name => console.log(`${name} -> ${phonebook[name]}`));
}


// test code

printPhonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
console.log();
printPhonebook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);