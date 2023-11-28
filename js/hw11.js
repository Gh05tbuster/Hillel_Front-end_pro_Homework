//-----------1--------------
const a1 = 20;
const b1 = 30;
const step1 = 0.5;
let res1 = '1.\t';

for (let i = a1; i <= b1; i++) {
    if (i < b1) {
        res1 += `${i} `;
        for (let j = i + step1; j < i + 1; j += step1) {
            res1 += `${j} `;
        }
    } else {
        res1 += `${i} `;
    }
}

console.log(res1);

//-----------2--------------
const rate = 27;
const step2 = 10;
let res2 = '2.\n';

for (let i = 10; i <= 100; i += step2) {
    res2 += `${i}\tUSD = ${i * rate}\tUAH`;
    if (i < 100) res2 += '\n';
}

console.log(res2);
//-----------3--------------
const a3 = 1;
const b3 = 100;
const N = 5740;
let resArr = ['3.'];

for (let i = a3; i <= b3; i++) {
    if (i * i < N) resArr.push(i);
    else break;
}

const res3 = resArr.join('\t');
console.log(res3);

//-----------4--------------
const M = 7;
let isPrime = true;

for (let i = 2; i < M; i++) {
    if (M % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(`4.\t${isPrime}`);

//-----------5--------------
const L = 81;
const k = 3;
let i = 1;
root3 = false;

while (i <= 81) {
    if (L / i === 1) root3 = true;
    i *= k;
}

console.log(`5.\t${root3}`);