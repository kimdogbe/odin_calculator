function add(a, b) {
	return Number(a) + Number(b);
};

function subtract(a, b) {
	return Number(a) - Number(b);
};

function multiply(a, b) {
  return Number(a) * Number(b);
};

function divide(a, b) {
  return Number(a) / Number(b);
}

let num1 = "";
let num2 = "";
let operator = "";

let displayValue = "";

function operate(operator, num1, num2){
  switch (operator){
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = 0;
  display.textContent = "0";
}

function setNumber(num){
  if (operator == ""){
    num1 = num1 + num;
    return num1;
  } 
  else {
    num2 = num2 + num;
    return num2
  }
}

function setOperator(op) {
  if (operator == ""){
    operator = op;
    return operator;
  }
}

// html and eventListeners
const display = document.querySelector("#display");

addEventListener("click", (event) => {
  let buttonClicked = event.target.innerHTML;
  let buttonClasses = event.target.className;

  
    if (buttonClasses.includes("number")){

      displayValue = setNumber(buttonClicked);
      display.textContent = displayValue;
    }
    else if (buttonClasses.includes("operand")){
      displayValue = setOperator(buttonClicked);
      display.textContent = displayValue;
    }
    else if (buttonClasses.includes("clear")){
      clearDisplay();
    }
    else if (buttonClasses.includes("eqlBtn")) {
      displayValue = operate(operator, num1, num2);
      display.textContent = displayValue;
    }
  
  // if (event.target.className.includes("btn")){
  //   displayValue = event.target.innerHTML;
  //   display.textContent = displayValue;
  // }
});