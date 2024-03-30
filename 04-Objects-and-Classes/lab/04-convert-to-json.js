function printJSONString(name, lastName, hairColor) {
    const personInfo = {
        name,
        lastName,
        hairColor,
    }

    const jsonPersonInfo = JSON.stringify(personInfo);

    console.log(jsonPersonInfo);
}


// test code

printJSONString('George', 'Jones', 'Brown');
printJSONString('Peter', 'Smith', 'Blond');