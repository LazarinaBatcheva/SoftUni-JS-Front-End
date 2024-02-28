function calculateFruitPrice(fruit, grams, pricePerKg) {
    let fruitWeight = Number(grams) / 1000;
    let totalPrice = fruitWeight * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${fruitWeight.toFixed(2)} kilograms ${fruit}.`);
}


// test code

calculateFruitPrice('orange', 2500, 1.80);
calculateFruitPrice('apple', 1563, 2.35);