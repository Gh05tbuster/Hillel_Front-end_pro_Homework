class Hamburger {
    hamburger = {
        price: 0,
        calValue: 0,
    }

    constructor(size, stuffing) {
        this.hamburger.price += size.price;
        this.hamburger.calValue += size.calValue;
        this.hamburger.price += stuffing.price;
        this.hamburger.calValue += stuffing.calValue;
    }

    static sizeSmall = {
        price: 50,
        calValue: 20,
    }
    static sizeBig = {
        price: 100,
        calValue: 40,
    }

    static stuffingCheese = {
        price: 10,
        calValue: 20,
    }
    static stuffingSalad = {
        price: 20,
        calValue: 5,
    }
    static stuffingFries = {
        price: 15,
        calValue: 10,
    }

    static toppingSpice = {
        price: 15,
        calValue: 0,
    }
    static toppingMayo = {
        price: 20,
        calValue: 5,
    }

    addTopping(topping) {
        this.hamburger.price += topping.price;
        this.hamburger.calValue += topping.calValue;
    }

    calculateCalories() {
        return this.hamburger.calValue;
    }

    calculatePrice() {
        return this.hamburger.price;
    }
}

let hamburger = new Hamburger(Hamburger.sizeBig, Hamburger.stuffingCheese);

hamburger.addTopping(Hamburger.toppingMayo);
console.log(`Price: ${hamburger.calculatePrice()}`);
console.log(`Calories: ${hamburger.calculateCalories()}`);

hamburger.addTopping(Hamburger.toppingSpice);
console.log(`Price: ${hamburger.calculatePrice()}`);