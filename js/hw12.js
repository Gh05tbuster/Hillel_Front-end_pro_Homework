const N = prompt("Enter the array length");
const arr = new Array(N);

for (let i = 0; i < N; i++) {
    arr[i] = prompt(`Enter the ${i + 1} element:`);
    arr[i] = +arr[i];
}

// const arr = [19, 1, 51, 7, 44, 3];
console.log(arr);

const arrSorted = arr.toSorted((a, b) => a - b);
console.log(arrSorted);

const arrSpliced = arrSorted.toSpliced(1, 3);
console.log(arrSpliced);