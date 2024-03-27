function storeGarageInfo(carsInfoList) {
    const garageInfo = {};

    carsInfoList.forEach(entry => {
        const [garageNumber, carInfo] = entry.split(' - ');
        const carDetails = carInfo.split(', ').reduce((acc, info) => {
            const [key, value] = info.split(': ');
            acc[key] = value;

            return acc;
        }, {});

        if (!garageInfo[garageNumber]) {
            garageInfo[garageNumber] = [];
        }

        garageInfo[garageNumber].push(carDetails);
    });

    Object.entries(garageInfo)
        .forEach(([garageNumber, cars]) => {
            console.log(`Garage № ${garageNumber}`);
            cars.forEach(car => 
                console.log(`--- ${Object
                                    .entries(car)
                                    .map(([key, value]) => `${key} - ${value}`).join(', ')}`));
        });
}


// test code

storeGarageInfo(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

console.log();

storeGarageInfo(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']);