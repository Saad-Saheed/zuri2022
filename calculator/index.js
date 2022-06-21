const first_number = window.prompt("Enter First Number");
const second_number = window.prompt("Enter Second Number");
const sel_operators = window.prompt("Enter one the following operators +, -, /, *");
window.alert(`Result: ${eval(first_number+""+sel_operators+""+second_number )}`);