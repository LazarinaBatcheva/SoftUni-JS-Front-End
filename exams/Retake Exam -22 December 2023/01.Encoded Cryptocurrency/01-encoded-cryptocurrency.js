function decodingMessage(input) {
    const stopCommand = 'Buy';
    const takeEvenCommand = 'TakeEven';
    const changeAllCommand = 'ChangeAll';
    const reverseCommand = 'Reverse';

    let message = input.shift();

    let currentCommand = input.shift();
    while (currentCommand !== stopCommand) {
        const [command, ...args] = currentCommand.split('?')

        if (command === takeEvenCommand) {
            message = takeEven(message);

            console.log(message);
        } else if (command.includes(changeAllCommand)) {
            const [substring, replacement] = args;
            
            message = changeAll(message, substring, replacement);

            console.log(message);
        } else if (command.includes(reverseCommand)) {
            const substring = args[0]

            if (message.includes(substring)) {
                message = reverseMessage(message, substring);

                console.log(message);
            } else {
                console.log('error');
            }
        }

        currentCommand = input.shift();
    }

    function takeEven(msg) {
        msg = Array.from(msg)
        .filter((ch, i) => ch ? i % 2 === 0 : '')
        .join('');

        return msg;
    }

    function changeAll(msg, substring, replacement) {
        msg = msg.split(substring).join(replacement);

        return msg;
    }

    function reverseMessage (msg, substr) {
        reversedSubstr = substr.split('').reverse().join('');

        msg = msg.replace(substr, '') + reversedSubstr;

        return msg;
    }

    console.log(`The cryptocurrency is: ${message}`);
}


// test code

decodingMessage((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
);

console.log('------------------------------');

decodingMessage((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
);