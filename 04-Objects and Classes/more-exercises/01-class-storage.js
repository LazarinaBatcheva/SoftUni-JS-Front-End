class Storage{
    constructor(capacity) {
        this.capacity = capacity;
        this._storage = [];
        this._totalCost = 0;
    }

    get storage() {
        return this._storage;
    }

    get totalCost() {
        return this._totalCost;
    }

    addProduct(product) {
        this._storage.push(product);
        this.capacity -= product.quantity;
        this._totalCost += product.price * product.quantity;
    }

    getProducts() {
        return this._storage.map(product => JSON.stringify(product)).join('\n');
    }
}


// rest code

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);


// let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
// let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);
