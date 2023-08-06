let buttons = [...document.querySelectorAll(".btn")];
let numberButtons = document.querySelectorAll(".btn");
let operatorButtons = document.querySelectorAll(".operator");
let currentOperand = document.getElementById("current-operand");
let previousOperand = document.getElementById("previous-operand");
let equalsKey = document.getElementById("equals-key");
// gets input from the user
const calcInput = document.getElementById("result");
// addition
function addition(num1, num2) {
  return num1 + num2;
}
//substraction
function substraction(num1, num2) {
  return num1 - num2;
}
// multiply
function multiply(num1, num2) {
  return num1 * num2;
}
// division
function division(num1, num2) {
  return num1 / num2;
}

function operate(operator, n1, n2) {
  switch (operator) {
    case "+":
      console.log("passing through switch + ");
      return addition(n1, n2);
    case "-":
      console.log("passing through switch - ");
      return substraction(n1, n2);
    case "*":
      console.log("passing through switch * ");
      return multiply(n1, n2);
    case "/":
      console.log("passing through switch * ");
      return division(n1, n2);
  }
}
currentOperand.textContent = " ";
previousOperand.textContent = " ";
// variables
let storedNumber = "";
let clickedOperator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
currentOperand.textContent = 0;

function clr() {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
}
// pop out numbers
numberButtons.forEach((number) => {
  number.addEventListener("click", function () {
    storedNumber += number.value;
    currentOperand.textContent = storedNumber;
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", function () {
    // save the first number
    firstNumber = storedNumber;

    // get the operator that was clicked
    clickedOperator = operator.value;
    previousOperand.textContent = storedNumber + clickedOperator;
    storedNumber = "";

    console.log(clickedOperator);
  });
});

equalsKey.addEventListener("click", function () {
  console.log("FirstNumber" + firstNumber + "Stored" + storedNumber);

  // operates the result
  result = operate(
    clickedOperator,
    parseInt(firstNumber),
    parseInt(storedNumber)
  );

  currentOperand.textContent = result;
  previousOperand.textContent =
    firstNumber + " " + clickedOperator + " " + storedNumber;
  storedNumber = result;
});
