class Vehicle {
    #parts = {};

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    set parts(value) {
        this.#parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power,
        };
    }

    get parts() {
        return this.#parts;
    }

    drive(fuelLoss) {
        return this.fuel -= fuelLoss;
    }
}


// test code

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

// let parts = {engine: 9, power: 500};
// let vehicle = new Vehicle('l', 'k', parts, 840);
// vehicle.drive(20);
// console.log(vehicle.fuel);