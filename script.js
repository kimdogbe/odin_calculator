function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
}

let num1 = 0;
let num2 = 0;
let operator = '';

function operate(operator, num1, num2){
  switch (operator){
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "x":
      multiply(num1, num2);
      break;
    case "/":
      devide(num1, num2);
      break;
  }
}