function calculating(number, ...commands) {
    number = Number(number);

    for (command of commands) {
        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = (number * 0.80).toFixed(1);
                break;
        }
        console.log(number);
    }
}


// test code

calculating('32', 'chop', 'chop', 'chop', 'chop', 'chop');
calculating('9', 'dice', 'spice', 'chop', 'bake', 'fillet');