const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const generateKey = (length, chars) => {
    let key = new Array(length);
    for (let i = 0; i < length; i++) {
        let charPosition = getRandomInt(chars.length);
        key[i] = chars[charPosition];
    }

    return key.join('');
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const myKey = generateKey(16, characters);

console.log(myKey);