const sum = () => {
    let sum = 0;

    return function (i) {
        return sum += i;
    }
}

let a = sum();
console.log(a(3));
console.log(a(5));
console.log(a(20));
