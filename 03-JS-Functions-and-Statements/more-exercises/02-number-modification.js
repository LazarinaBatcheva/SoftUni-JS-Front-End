function modifyNumber(number) {
    let modifiedNumber = number;

    function averageOfDigits(number) {
        const digits = Array.from(String(number), Number);
        const sumDigits = digits.reduce((sum, num) => sum + num, 0);
        return sumDigits / digits.length;
    }

    while (averageOfDigits(modifiedNumber) < 5) {
        modifiedNumber = parseInt(`${modifiedNumber}9`);
    }

    console.log(modifiedNumber);
}


// test code

modifyNumber(101);
modifyNumber(5835);