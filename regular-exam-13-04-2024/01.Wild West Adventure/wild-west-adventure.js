function printDuelsInfo(input) {
    const maxHP = 100;
    const maxBullets = 6;

    const numberOfCharacters = input.shift();
    const heroes = input.splice(0, numberOfCharacters);

    const heroesData = {};

    for (const hero of heroes) {
        const [name, hpStr, bulletsStr] = hero.split(' ');
        
        if (!heroesData.hasOwnProperty(name)) {
            heroesData[name] = {};
        }

        heroesData[name].hp = Number(hpStr);
        heroesData[name].bullets = Number(bulletsStr);
    }

    const stopCommand = 'Ride Off Into Sunset';
    const fireShotCommand = 'FireShot';
    const takeHitCommand = 'TakeHit';
    const reloadCommand = 'Reload';
    const patchUpCommand = 'PatchUp';


    let currentCommand = input.shift();
    while (currentCommand !== stopCommand) {
        const [command, ...args] = currentCommand.split(' - ');

        // do I have to check if there is a hero whit this name in heroesData?
        if (command === fireShotCommand) {
            const [heroName, target] = args;
            
            if (heroesData[heroName].bullets > 0) {
                heroesData[heroName].bullets -= 1;

                console.log(`${heroName} has successfully hit ${target} and now has ${heroesData[heroName].bullets} bullets!`);
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
        }  else if (command === takeHitCommand) {
            const [heroName, damageStr, attacker] = args;
            const damage = Number(damageStr);

            if (heroesData[heroName].hp - damage > 0) {
                heroesData[heroName].hp -= damage;

                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${heroesData[heroName].hp} HP!`);
            } else {
                delete heroesData[heroName];

                console.log(`${heroName} was gunned down by ${attacker}!`);
            }
        } else if (command === reloadCommand) {
            const heroName = args[0];
            
            if (heroesData[heroName].bullets < maxBullets) {
                const neededBullets = maxBullets - heroesData[heroName].bullets;

                heroesData[heroName].bullets += neededBullets;

                console.log(`${heroName} reloaded ${neededBullets} bullets!`);
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        } else if (command === patchUpCommand) {
            const [heroName, amountStr] = args;
            const amount = Number(amountStr);
            
            if (heroesData[heroName].hp === maxHP) {
                console.log(`${heroName} is in full health!`);
            } else {
                let recoveredHP = 0;

                if (heroesData[heroName].hp + amount > maxHP) {
                    recoveredHP = maxHP - heroesData[heroName].hp;
                    heroesData[heroName].hp = maxHP;
                } else {
                    recoveredHP = amount;
                    heroesData[heroName].hp += amount;
                }

                console.log(`${heroName} patched up and recovered ${recoveredHP} HP!`);
            }
        }

        currentCommand = input.shift();
    }

    for (const hero in heroesData) {
        console.log(hero);
        console.log(` HP: ${heroesData[hero].hp}`);
        console.log(` Bullets: ${heroesData[hero].bullets}`);
    }
}


// test code

printDuelsInfo(["2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"]);

console.log('-------------------------------');

printDuelsInfo(["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]);

 console.log('-------------------------------');

 printDuelsInfo(["2",
 "Gus 100 4",
 "Walt 100 5",
 "FireShot - Gus - Bandit",
 "TakeHit - Walt - 100 - Bandit",
 "Reload - Gus",
 "Ride Off Into Sunset"]);