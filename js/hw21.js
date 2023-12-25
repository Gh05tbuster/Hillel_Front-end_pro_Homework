class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Appartment {
    residents = [];
    addResident(resident) {
        if (resident instanceof Human)
            this.residents.push(resident);
        else return;
    }
}

class House {
    constructor(numberOfAppartments) {
        this.numberOfAppartments = numberOfAppartments;
    }
    appartments = [];
    numberOfAppartments;

    addAppartment(appartment) {
        if (!(appartment instanceof Appartment)) return;
        if (this.appartments.length < this.numberOfAppartments)
            this.appartments.push(appartment);
        else console.log("Sorry, all appartments are occupied");
    }
}

const n764 = new Human('Jakoot', 'm');
const n7 = new Human('Biron', 'm');
const n142 = new Human('Melville', 'f');
const n264 = new Human('Alkatras', 'm');
const n1000 = new Human('1k', 'm');

const a1 = new Appartment();
const a2 = new Appartment();
const a3 = new Appartment();


const imposter = "Dogo";

a1.addResident(imposter);
a1.addResident(n764);
a1.addResident(n1000);
a2.addResident(n142);
a3.addResident(n264);
a3.addResident(n7);

const ourHouse = new House(2);

const fakeAppartment = '000';

ourHouse.addAppartment(fakeAppartment);
ourHouse.addAppartment(a1);
ourHouse.addAppartment(a2);
ourHouse.addAppartment(a3);