const codes = {
    "6": "Польща",
    "38": "Україна",
    "1": "США"
};
const codesJson = JSON.stringify(codes);
const codesMap = new Map();
for (let [k, v] of Object.entries(codes)) {
    codesMap.set(k, v);
}

const codesSpaces = {
    " 6": "Польща",
    " 38": "Україна",
    " 1": "США"
};

// const codesSpaces = {};
// for (let key in codes) {
//     const newKey = " " + key;
//     codesSpaces[newKey] = codes[key];
// }

const codesSpacesJson = JSON.stringify(codesSpaces);
const codesSpacesMap = new Map();
for (let [k, v] of Object.entries(codesSpaces)) {
    codesSpacesMap.set(k, v);
}

console.log(codes);
console.log(codesJson);
console.log(codesMap);

console.log(codesSpaces);
console.log(codesSpacesJson);
console.log(codesSpacesMap);

for (let key in codes) {
    console.log(key);
}

for (let key in codesSpaces) {
    console.log(key);
}
