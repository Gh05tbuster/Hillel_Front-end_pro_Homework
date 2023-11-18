const firstString = prompt("Enter first string:");
const secondString = prompt("Enter second string:");
const thirdString = prompt("Enter third string:");

document.querySelector('#concat').innerHTML = firstString + ' ' + secondString + ' ' + thirdString;

const x = 12345;
// const xs = x.toString();
// const xS = `${xs[0]} ${xs[1]} ${xs[2]} ${xs[3]} ${xs[4]}`;
// document.querySelector("#number1").innerHTML = xS;

let tmp = x;
let arr = [];

for (let i = 4; i >= 0; i--) {
    arr[i] = tmp % 10;
    tmp /= 10;
    tmp = Math.trunc(tmp);
}

const outputString = arr.join(" ");
document.querySelector("#number2").innerHTML = outputString;
