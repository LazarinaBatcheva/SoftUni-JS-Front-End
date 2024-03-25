function makeCatalogue(productsList) {
    const catalogue = {};

    for (const product of productsList) {
        const [productName, price] = product.split(' : ');

        if (!catalogue[productName[0]]) {
        catalogue[productName[0]] = [];
        }

        catalogue[productName[0]].push({name: productName, price: Number(price)});
    }

    Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([key, value]) => {
            console.log(key)
            value.sort((a, b) => a.name.localeCompare(b.name))
                .forEach(({name, price}) => console.log(`  ${name}: ${price}`));
        });
}


// test code
makeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    );

console.log();

makeCatalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    );