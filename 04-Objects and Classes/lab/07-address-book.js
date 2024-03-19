function printAddressBook(addressesArray) {
    const addressBook = {};

    for (const person of addressesArray) {
        const [name, address] = person.split(':');

        addressBook[name] = address;
    }

    Object
        .entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}


// test code

printAddressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);

console.log();

printAddressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);