const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveAmount = 0;
let sumOfPositive = 0;

let min = arr[0];
let minIndex = 0;

let max = arr[0];
let maxIndex = 0;

let negativeAmount = 0;
let oddNegativeAmount = 0;
let evenNegativeAmount = 0;

let sumOfEvenPositive = 0;
let sumOfOddPositive = 0;

let productOfPositive = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) continue;

    if (arr[i] > 0) {
        positiveAmount++;
        sumOfPositive += arr[i];
        productOfPositive *= arr[i];

        if (arr[i] % 2 !== 0) {
            sumOfOddPositive += arr[i];
        } else {
            sumOfEvenPositive += arr[i];
        }
    } else {
        negativeAmount++;

        if (arr[i] % 2 !== 0) {
            oddNegativeAmount++;
        } else {
            evenNegativeAmount++;
        }
    }

    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    } else if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
    }
}
console.log(arr);
console.log(`
Amount of positive numbers: ${positiveAmount};\n
Sum of positive numbers: ${sumOfPositive};\n
Min element is ${min} on the ${minIndex} position;\n
Max element is ${max} on the ${maxIndex} position;\n
Amount of negative numbers: ${negativeAmount};\n
Of which ${evenNegativeAmount} are even and ${oddNegativeAmount} are odd;\n
Sum of even positive numbers: ${sumOfEvenPositive};\n
Sum of odd positive numbers: ${sumOfOddPositive};\n
Product of positive numbers: ${productOfPositive};
`);

for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex) arr[i] = 0;
}
console.log(arr);

//-------Or if we need it without the mutation-------

const arr2 = new Array(arr.length);
for (let i = 0; i < arr.length; i++) {
    if (i !== maxIndex) arr2[i] = 0;
    else arr2[i] = max;
}
console.log(arr2);
