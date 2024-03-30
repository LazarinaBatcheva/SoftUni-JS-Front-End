function printHeroesInfo(data) {
    const heroesInfo = [];

    function getHeroData(line) {
        const [name, level, items] = line.split(' / ');

        const hero = {
            name,
            level: Number(level),
            items,
        }

        heroesInfo.push(hero);

        return heroesInfo;
    }

    data.forEach(line => getHeroData(line))

    heroesInfo
        .sort((a, b) => a.level - b.level)
        .forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`));
}


// test code

printHeroesInfo([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );

console.log();

printHeroesInfo([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );
