//----------------1----------------------
const arr1 = [5, 'h', 14, 3, 'q', 8];

const average = (arr) => {
    const filteredArr = arr.filter((el) => typeof el === 'number');
    return filteredArr.reduce((sum, i) => sum + i) / filteredArr.length;
}
console.log('1. AVERAGE');
const avrg = average(arr1);
console.log(avrg);

//----------------2----------------------
const doMath = (x, sign, y) => {
    switch (sign) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default: return 'error';
    }
}

console.log('2. DO MATH');
let a = doMath(3, '+', 2);
console.log(a);
a = doMath(3, '-', 2);
console.log(a);
a = doMath(3, '*', 2);
console.log(a);
a = doMath(3, '/', 2);
console.log(a);
a = doMath(3, '%', 2);
console.log(a);
a = doMath(3, '^', 2);
console.log(a);
a = doMath(3, '$', 2);
console.log(a);

//----------------3----------------------
const getMatrix = () => {
    const rows = prompt('How many rows?');
    const colLengths = new Array(rows);
    const matrix = new Array(rows);

    for (let i = 0; i < rows; i++) {
        colLengths[i] = prompt(`Enter the length of ${i + 1} row:`);
        matrix[i] = new Array(colLengths[i]);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < colLengths[i]; j++) {
            matrix[i][j] = prompt(`Enter [${i + 1},${j + 1}] element:`);
        }
    }

    return matrix;
}

const showMatrix = () => {
    console.log('3. MATRIX');
    const matrix = getMatrix();
    console.log(matrix);
}

//----------------4----------------------
const removeSymbols = (string, symbols) => {
    if (symbols.length > 0) {
        return removeSymbols(string.split(symbols.shift()).join(''), symbols);
    } else
        return string;
}

console.log('4. REMOVE');
const newString = removeSymbols('hello world', ['l', 'd']);
console.log(newString);