function printFlightInfo(dataList) {
    const flightsInfo = {};
    const [flights, statuses, statusToCheck] = [dataList[0], dataList[1], dataList[2].toString()];
    const readyToFlyStatus = 'Ready to fly';

    for (const flight of flights) {
        const [sector, destination] = flight.split(' ');
        flightsInfo[sector] = {destination, status: readyToFlyStatus};
    }

    for (const flight of statuses) {
        const [sector, status] = flight.split(' ');

        if (flightsInfo[sector]) {
            flightsInfo[sector].status = status;
        }
    }

    Object.entries(flightsInfo)
        .filter(([_, flight]) => flight.status === statusToCheck)
        .forEach(flight => console.log(`{ Destination: '${flight[1].destination}', Status: '${flight[1].status}' }`));
}


// test code

printFlightInfo([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
);

console.log();

printFlightInfo([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
);