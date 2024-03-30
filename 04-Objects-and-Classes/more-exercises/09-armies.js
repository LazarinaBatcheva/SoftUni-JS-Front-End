function storeArmysInfo(inputData) {
    const armyLeaders = {};
    const addCommand = 'arrives';
    const deleteCommand = 'defeated';
    
    inputData.forEach(entry => {
        if (entry.includes(addCommand) || entry.includes(deleteCommand)) {
            const data = entry.split(' ');
            const command = data.pop()
            const leader = data.join(' ');

            if (command === addCommand) {
                armyLeaders[leader] = {totalCount: 0, armies: {}};
            } else {
                delete armyLeaders[leader];
            }
        } else {
            let leader, armyName, count;

            if (entry.includes(':')) {
                [leader, restData] = entry.split(': ');
                [armyName, countStr] = restData.split(', ');
                count = Number(countStr);

                if (armyLeaders[leader]) {
                    armyLeaders[leader].armies[armyName] = count;
                    armyLeaders[leader].totalCount += count;
                }
            } else if (entry.includes('+')) {
                [armyName, countStr] = entry.split(' + ');
                count = Number(countStr);

                let armyExist = false;
                for (let leaderName in armyLeaders) {
                    if (armyLeaders[leaderName].armies[armyName]) {
                        armyLeaders[leaderName].armies[armyName] += count;
                        armyLeaders[leaderName].totalCount += count;
                        armyExist = true;
                        break;
                    }
                }
            }
        }
    });

    Object.entries(armyLeaders)
        .sort((a, b) => b[1].totalCount - a[1].totalCount)
        .forEach(([leader, data]) => {
            console.log(`${leader}: ${data.totalCount}`);
            Object.entries(data.armies)
                .sort((a, b) => b[1] - a[1])
                .forEach(([army, count]) => console.log(`>>> ${army} - ${count}`));
        });
}  


// test code

storeArmysInfo(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);

console.log();

storeArmysInfo(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);