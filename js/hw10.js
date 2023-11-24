//--------------1-------------------
let str1 = '1.\t';
for (let i = 10; i <= 20; i++) {
    i < 20 ? str1 += `${i}, ` : str1 += i;
}
console.log(str1);

//--------------2-------------------
let str2 = '2.\t';
for (let i = 10; i <= 20; i++) {
    i < 20 ? str2 += `${i * i}, ` : str2 += i * i;
}
console.log(str2);

//--------------3-------------------
let str3 = '3.\n\n';
const n3 = 7;
for (let i = 1; i <= 10; i++) {
    str3 += `${n3} × ${i} = ${n3 * i}`;
    if (i < 10) str3 += '\n';
}
console.log(str3);

//--------------4-------------------
let sum4 = 0;
for (let i = 1; i <= 15; i++) {
    sum4 += +i;
}
console.log(`4.\t${sum4}`);

//--------------5-------------------
let prod = 1;
for (let i = 15; i <= 35; i++) {
    prod *= i;
}
console.log(`5.\t${prod}`);

//--------------6-------------------
let sum6 = 0;
const n6 = 500;
for (let i = 1; i <= n6; i++) {
    sum6 += +i;
}
console.log(`6.\t${sum6 / n6}`);

//--------------7-------------------
let sum7 = 0;
for (let i = 30; i <= 80; i++) {
    i % 2 === 0 ? sum7 += i : sum7 += +0;
}
console.log(`7.\t${sum7}`);

//--------------8-------------------
let str8 = '8.\t';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        str8 += i;
        if (i < 200) str8 += ', ';
    }
}
console.log(str8);

//--------------9-------------------
const N = 5172;
let dividers = [];
let str9 = '9.\t';
for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
        dividers.push(i);
    }
}
str9 += dividers.join(', ');
console.log(str9);

//-------------10-11----------------
let c = 0;
let sum11 = 0;
for (let i = 0; i < dividers.length; i++) {
    if (dividers[i] % 2 === 0) {
        sum11 += dividers[i];
        c++;
    }
}
console.log(`10.\t${c}`);
console.log(`11.\t${sum11}`);

//-------------12-------------------
let str12 = '12.\n\n';
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        str12 += `${i} × ${j} = ${i * j}\n`;
    }
    str12 += '\n';
}
console.log(str12);