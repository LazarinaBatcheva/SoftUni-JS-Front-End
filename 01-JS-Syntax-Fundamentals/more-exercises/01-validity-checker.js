function checkValidDistance(x1, y1, x2, y2) {
    const distance1 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
    const distance2 = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
    const distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (Number.isInteger(distance1)) {
       console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }
    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }
    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}


// function calculateDistance(x1, y1, x2, y2) {
//     return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// function checkValidDistance(x1, y1, x2, y2) {
//     const distance1 = calculateDistance(x1, y1, 0, 0);
//     const distance2 = calculateDistance(x2, y2, 0, 0);
//     const distance3 = calculateDistance(x1, y1, x2, y2);

//     if (Number.isInteger(distance1)) {
//        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
//     }
//     if (Number.isInteger(distance2)) {
//         console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
//     } else {
//         console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
//     }
//     if (Number.isInteger(distance3)) {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
//     } else {
//         console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
//     }
// }


// test code

checkValidDistance(3, 0, 0, 4);
console.log('-------------');
checkValidDistance(2, 1, 1, 1);