function catsInfo(catsArray) {
    
    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    catsArray
        .map(cat => cat.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow());
}


// test code

catsInfo(['Mellow 2', 'Tom 5']);
console.log();
catsInfo(['Candy 1', 'Poppy 3', 'Nyx 2']);