function calculateCircleArea(input) {
    let result;

    if (typeof input === 'number') {
        let area = Math.pow(input, 2) * Math.PI;
        result = area.toFixed(2)
    } else {
        result = `We can not calculate the circle area, because we receive a ${typeof input}.`;
    }

    console.log(result);
}


// test code

calculateCircleArea(5);
calculateCircleArea('name');
