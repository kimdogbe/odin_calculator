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
let numberToggle = 1;

let displayValue = "";

function operate(operator, prefix, posfix){
  switch (operator){
    case "+":
      return add(prefix, posfix);
    case "-":
      return subtract(prefix, posfix);
    case "x":
      return multiply(prefix, posfix);
    case "/":
      return divide(prefix, posfix);
  }
}

function resetValues() {
  num1 = "";
  num2 = "";
  operator = "";
  displayValue = 0;
  numberToggle = 1;
}

function clearDisplay() {
  resetValues();
  updateDisplay("0");
}

function setNumber(num){
  if (numberToggle){
    num1 = num1 + num;
    return num1;
  } 
  else {
    num2 = num2 + num;
    return num2;
  }
}

function setOperator(op) {
  operator = op;
  numberToggle = 0;
}

function updateDisplay(value) {
  display.textContent = value;
}

// html and eventListeners
const display = document.querySelector("#display");

addEventListener("click", (event) => {
  let buttonClicked = event.target.innerHTML;
  let buttonClasses = event.target.className;
  
  if (buttonClasses.includes("number btn")){
    displayValue = setNumber(buttonClicked);
    updateDisplay(displayValue);
  }
  else if (buttonClasses.includes("operand")){
    if (num1 && num2) {
      let result = operate(buttonClicked, num1, num2);
      num1 = result;
      num2 = "";
      updateDisplay(result);
    }
    else {
      setOperator(buttonClicked);
    }
  }
  else if (buttonClasses.includes("clear")){
    clearDisplay();
  }
  else if (buttonClasses.includes("eqlBtn")) {
    displayValue = operate(operator, num1, num2);
    updateDisplay(displayValue);
    resetValues();
  }

  console.log(`Num1:${num1} Num2:${num2} Op:${operator}`)
});