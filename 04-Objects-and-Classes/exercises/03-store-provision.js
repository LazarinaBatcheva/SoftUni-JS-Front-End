function printItemsInTheStore(...items) {
    const itemsInfo = {};

    function getItems(line) {
        for (let i = 0; i < line.length; i+=2) {
            const [name, quantity] = [line[i], Number(line[i+1])];

            if (!itemsInfo[name]) {
                itemsInfo[name] = 0;
            }
    
            itemsInfo[name] += quantity;
            }

        return itemsInfo;
    }

    items.forEach(line => getItems(line));

    for (const item in itemsInfo) {
        console.log(`${item} -> ${itemsInfo[item]}`);
    }
}


// test code

printItemsInTheStore([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
console.log();
printItemsInTheStore([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );