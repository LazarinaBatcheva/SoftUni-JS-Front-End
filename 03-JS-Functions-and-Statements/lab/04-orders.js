function calculatingOrder(product, quantity) {
    const prices = {
        coffee: 1.5,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    }

    let totalPrice = quantity * prices[product];

    console.log(totalPrice.toFixed(2));
}


// test code

calculatingOrder("water", 5);
calculatingOrder("coffee", 2);