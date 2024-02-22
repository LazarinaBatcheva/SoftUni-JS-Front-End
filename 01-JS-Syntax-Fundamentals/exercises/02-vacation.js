function vacationPrice(numberOfPeople, groupType, day) {
    let priceForPerson = 0;

    if (groupType === 'Students') {
        switch (day) {
            case 'Friday':
                priceForPerson = 8.45;
                break;
            case 'Saturday':
                priceForPerson = 9.80;
                break;
            case 'Sunday':
                priceForPerson = 10.46;
                break;
        }
    } else if (groupType === 'Business') {
        switch (day) {
            case 'Friday':
                priceForPerson = 10.90;
                break;
            case 'Saturday':
                priceForPerson = 15.60;
                break;
            case 'Sunday':
                priceForPerson = 16;
                break;
        }
    } else if (groupType === 'Regular') {
        switch (day) {
            case 'Friday':
                priceForPerson = 15;
                break;
            case 'Saturday':
                priceForPerson = 20;
                break;
            case 'Sunday':
                priceForPerson = 22.50;
                break;
        }
    }

    let totalPrice = numberOfPeople * priceForPerson;

    if (groupType === 'Students' && numberOfPeople >= 30) {
        totalPrice *= 0.85; 
    } else if (groupType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= 10 * priceForPerson;
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


// test code

vacationPrice(30, 'Students', 'Sunday');
vacationPrice(40, 'Regular', 'Saturday');
vacationPrice(100, 'Business', 'Sunday');