const sum = () => {
    let acc = 0;

    return function (i) {
        return acc += i;
    }
}

let add = sum();
console.log(add(3));
console.log(add(5));
console.log(add(20));

