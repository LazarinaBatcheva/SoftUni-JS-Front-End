function printCityInfo(cityInfoObj) {
     Object
        .keys(cityInfoObj)
        .forEach(key => console.log(`${key} -> ${cityInfoObj[key]}`));
}


// test code

printCityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
console.log();
printCityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);