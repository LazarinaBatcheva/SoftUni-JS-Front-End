function decodingInfo(input) {
    const endCommand = 'End';
    const removeEvenCommand = 'RemoveEven';
    const takePartCommand = 'TakePart';
    const reverseCommand = 'Reverse';

    let concealedSpell = input.shift();

    let currentCommand = input.shift();
    while (currentCommand !== endCommand) {
        const [command, ...args] = currentCommand.split('!');

        if (command === removeEvenCommand) {
            concealedSpell = removeEvevIndices(concealedSpell);

            console.log(concealedSpell);
        } else if (command === takePartCommand) {
            const [fromIndex, toIndex] = args;

            // do I have to check for invalid index?
            concealedSpell = takePartOfStr(concealedSpell, fromIndex, toIndex);

            console.log(concealedSpell);
        } else if (command === reverseCommand) {
            const substring = args[0];

            if (!concealedSpell.includes(substring)) {
                console.log('Error');
                break;
            }

            concealedSpell = reverseString(concealedSpell, substring);

            console.log(concealedSpell);
        }

        currentCommand = input.shift();
    }

    console.log(`The concealed spell is: ${concealedSpell}`);

    function removeEvevIndices(spell) {
        spell = spell.split('')
            .filter((ch, i) => ch ? i % 2 === 0 : '')
            .join('');

        return spell;
    }

    function takePartOfStr(spell, startIndex, endIndex) {
        spell = spell.split('')
            .splice(startIndex, endIndex - startIndex)
            .join('');
        
        return spell;
    }

    function reverseString(spell, substr) {
        const reversedSubstr = substr.split('').reverse().join('');

        spell = spell.replace(substr, '') + reversedSubstr;

        return spell;
    }
}


// test code

decodingInfo((["asAsl2adkda2mdaczsa", 
"RemoveEven",
"TakePart!1!9",
"Reverse!maz",
"End"])
);

console.log('------------------------');

decodingInfo((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
"TakePart!31!42",
"RemoveEven",
"Reverse!anim",
"Reverse!sad",
"End"])
);