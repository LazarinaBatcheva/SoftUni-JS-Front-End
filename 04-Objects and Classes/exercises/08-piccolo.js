function printParkingLotInfo(carsList) {
    const parkingInfo = {};
    
    carsList.forEach(car => {
        const [command, carRegistration] = car.split(', ');
        command === 'IN' 
            ? parkingInfo[carRegistration] = true 
            : delete parkingInfo[carRegistration];
    });

    if (Object.keys(parkingInfo).length === 0) {
        console.log('Parking Lot is Empty');
    }

    Object
        .keys(parkingInfo)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carRegistration => console.log(carRegistration));
}


// test code

printParkingLotInfo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);

console.log();

printParkingLotInfo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);