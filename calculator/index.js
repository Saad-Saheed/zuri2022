let operators = ['+', '-', '*', '/'];
const first_number = Number.parseFloat(window.prompt("Enter First Number"));
const second_number = Number.parseFloat(window.prompt("Enter Second Number"));
const sel_operators = window.prompt("Enter one the following operators +, -, /, *");

if(Number.isNaN(first_number)){
    alert('invalid first Number');
}else if(Number.isNaN(second_number)){
    alert('invalid second Number');
}else if(!operators.includes(sel_operators)){
    alert('invalid operator supplied');
}else{
    window.alert(`Result: ${eval(first_number+""+sel_operators+""+second_number )}`);
}