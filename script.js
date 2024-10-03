let currentResult = "0";
let nextNumber = "";
let operator = "";
let displayValue = "0";

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
  currentResult = "0";
  nextNumber = "";
  operator = "";
  displayValue = "0";
}

function clearDisplay() {
  resetValues();
  updateDisplay("0");
}

function updateDisplay(value) {
  display.textContent = value;
}

// html and eventListeners and General Logic
const display = document.querySelector("#display");

addEventListener("click", (event) => {
  let buttonClicked = event.target.innerHTML;
  let buttonClasses = event.target.className;
  
  if (buttonClasses.includes("number btn")){
    if (operator == ""){
      currentResult += buttonClicked;
      currentResult = Number(currentResult);
      updateDisplay(currentResult);
    }
    else {
      nextNumber += buttonClicked;
      nextNumber = Number(nextNumber);
      updateDisplay(nextNumber);
    }
  }
  else if (buttonClasses.includes("operand")){
    if (nextNumber == ""){
      operator = buttonClicked;
    }
    else {
      currentResult = operate(operator, currentResult, nextNumber);
      operator = buttonClicked;
      nextNumber = "";
    }
    updateDisplay(currentResult);
  }
  else if (buttonClasses.includes("eqlBtn")) {
    if (operator != ""){
      if (nextNumber == ""){
        currentResult = operate(operator, currentResult, 0);
      }
      else {
        currentResult = operate(operator, currentResult, nextNumber);
      }
      updateDisplay(currentResult);
    }
  }
  else if (buttonClasses.includes("clear")){
    clearDisplay();
  }

  console.log(`Num1:${currentResult} Num2:${nextNumber} Op:${operator}`)
});