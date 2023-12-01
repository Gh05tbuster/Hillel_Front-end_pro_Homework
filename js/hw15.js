const removeElement = (array, value) => {
    return array.filter((item) => item !== value);
};

const array = [1, 5, 3, 8, 5, 4, 2, 1, 9, 3];
const newArray = removeElement(array, 5);
console.log(newArray);