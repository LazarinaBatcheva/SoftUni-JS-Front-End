function checkPassword(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isOnlyLettersAndDigits = password => /^[a-zA-Z0-9]+$/.test(password);
    const isStrong = password => password
            .split('')
            .filter(char => Number.isInteger(Number(char)))
            .length >= 2;

    const validators = [
        [isValidLength, 'Password must be between 6 and 10 characters'],
        [isOnlyLettersAndDigits, 'Password must consist only of letters and digits'],
        [isStrong, 'Password must have at least 2 digits'],
    ]

    const checkErrors = validators
            .map(([val, msg]) => val(password) ? '' : msg)
            .filter(msg => msg);

    if (checkErrors.length === 0) {
        console.log('Password is valid');
    } else {
        checkErrors.forEach(msg => console.log(msg));
    }
}


// test code

checkPassword('logIn');
console.log('-----------------');
checkPassword('MyPass123');
console.log('-----------------');
checkPassword('Pa$s$s');