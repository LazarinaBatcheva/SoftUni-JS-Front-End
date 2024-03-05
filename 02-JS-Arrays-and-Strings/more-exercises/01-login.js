function userLogin(arrayOfStrings) {
    const maxAttempts = 4;
    
    let username = arrayOfStrings[0];
    let password = username.split('').reverse().join('');

    for (let i = 1; i < arrayOfStrings.length; i++) {
        if (i < maxAttempts) {
            if (arrayOfStrings[i] === password) {
                console.log(`User ${username} logged in.`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        } else if (i === maxAttempts) {
            if (arrayOfStrings[i] === password) {
                console.log(`User ${username} logged in.`);
            } else {
                console.log(`User ${username} blocked!`);
            }
        }
    }
}


// test code

userLogin(['Acer','login','go','let me in','recA']);
console.log('------------------');
userLogin(['momo','omom']);
console.log('------------------');
userLogin(['sunny','rainy','cloudy','sunny','not sunny']);
