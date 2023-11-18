const a = prompt("Enter first number:");
const b = prompt("Enter second number:");
alert(`
• ${a} + ${b} = ${+a + +b} \n
• ${a} - ${b} = ${+a - +b} \n
• ${a} * ${b} = ${+a * +b} \n
• ${a} / ${b} = ${+a / +b}
`);

// document.querySelector('#addition').innerHTML = `${a} + ${b} = ${+a + +b}`;
// document.querySelector('#substraction').innerHTML = `${a} - ${b} = ${+a - +b}`;
// document.querySelector('#multiplication').innerHTML = `${a} * ${b} = ${+a * +b}`;
// document.querySelector('#division').innerHTML = `${a} / ${b} = ${+a / +b}`;