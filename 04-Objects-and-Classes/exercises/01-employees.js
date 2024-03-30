function printEmployeesInfo(employeesArray) {
    const employeesInfo = {};

    for (const epmployee of employeesArray) {
        employeesInfo[epmployee] = epmployee.length;
    }

    Object
        .entries(employeesInfo)
        .forEach(([person, number]) => console.log(`Name: ${person} -- Personal Number: ${number}`));
}


// test code

printEmployeesInfo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

console.log();

printEmployeesInfo([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);