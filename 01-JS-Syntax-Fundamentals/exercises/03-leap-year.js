function leapYear(year) {
    year = Number(year);
    let result = '';

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result = 'yes';
    } else {
        result = 'no';
    }

    console.log(result);
}


// test code

leapYear(1984);
leapYear(2003);
leapYear(4);