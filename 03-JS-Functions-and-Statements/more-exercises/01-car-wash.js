function washingCar(commandsArray) {
    let washProgress = 0;

    const actions = {
        soap: () => washProgress += 10,
        water: () => washProgress *= 1.2,
        'vacuum cleaner': () => washProgress *= 1.25,
        mud: () => washProgress *= 0.9,
    }


    commandsArray.forEach(command => actions[command]());

    console.log(`The car is ${washProgress.toFixed(2)}% clean.`);
}


// test cocde

washingCar(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
washingCar(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);