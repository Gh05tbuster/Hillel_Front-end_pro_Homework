const parseJSON = function (str) {
    if (typeof str === 'string')
        try {
            return JSON.parse(str);
        } catch (error) {
            return { error: error };
        }
    else return {
        error: 'Not a string'
    }
}

const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';  // the original second string is also correct
const jsonString2 = '{"name": "Alice", age: "twenty-five", "city": "London"}';
const notJsonString3 = 12;

const jsn1 = parseJSON(jsonString1);
const jsn2 = parseJSON(jsonString2);
const njsn3 = parseJSON(notJsonString3);

console.log(jsn1);
console.log(jsn2);
console.log(njsn3);
