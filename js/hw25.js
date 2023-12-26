class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo() {
        console.log(`This is ${this.name}, they're ${this.age} years old;`);
    }
}

class Car {
    owner;

    constructor(brand, model, year, plate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plate = plate;
    }

    assignOwner(smb) {
        if (smb instanceof Human) {
            if (smb.age >= 18) {
                this.owner = smb;
            } else {
                console.log('You must turn 18 to own a car.');
            }
        } else {
            console.log('Only a human can own a car.');
        }
    }

    showInfo() {
        console.log(`It's a ${this.year} ${this.brand} ${this.model} with plate ${this.plate}. Owned by ${this.owner ? this.owner.name : 'no one'}.`);
    }
}

const cat = "Cat";
const frank = new Human('Francis', 48);
const michael = new Human('Michael', 16);

const audi = new Car('Audi', 'A4', 2010, 'AA2408AB');
audi.showInfo();
audi.assignOwner(cat);
audi.showInfo();
audi.assignOwner(michael);
audi.showInfo();
audi.assignOwner(frank);
audi.showInfo();