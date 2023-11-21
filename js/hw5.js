const action = prompt('Enter the action (add, sub, mult or div):');
const a = prompt('Enter 1st operand:');
const b = prompt('Enter 2nd operand:');
let result = '';

switch (action.toLowerCase()) {
    case 'add':
        result = `${a} + ${b} = ${+a + +b}`;
        break;

    case 'sub':
        result = `${a} - ${b} = ${+a - +b}`;
        break;

    case 'mult':
        result = `${a} * ${b} = ${+a * +b}`;
        break;

    case 'div':
        result = `${a} / ${b} = ${+a / +b}`;
        break;

    default:
        result = 'You have entered the wrong action';
}

alert(result);