function printTownsInfo(inputArray) {
    let townsInfo;

    for (const row of inputArray) {
        const [town, latitude, longitude] = row.split(' | ');

        townsInfo = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }

        console.log(townsInfo);
    }
}


// test code

printTownsInfo(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
console.log();
printTownsInfo(['Plovdiv | 136.45 | 812.575']);