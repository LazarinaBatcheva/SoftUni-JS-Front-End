class Laptop{
    _info = {};
    _price = 0;

    constructor(info, quality) {
        this._info = info;
        this.quality = quality;
        this.isOn = false;
    }

    set info(info){
        this._info = {
            producer: info.producer,
            agent: Number(info.agent),
            brand: info.brand,
        }
    }

    get info(){
        return this._info;
    }

    turnOn(){
        this.isOn = true;
        this.quality -= 1;

        return this.isOn;
    }

    turnOff(){
        this.isOn = false;
        this.quality -= 1;

        return this.isOn;
    }

    showInfo(){
        return JSON.stringify(this._info);
    }

    get price(){
        this._price = 800 - (this.info.age * 2) + (this.quality * 0.5);

        return this._price;
    }
}


// test code

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)

// let info = {producer: "Lenovo", age: 1, brand: "Legion"}
// let laptop = new Laptop(info, 10)
// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// laptop.turnOn()
// laptop.turnOff()
// console.log(laptop.isOn)