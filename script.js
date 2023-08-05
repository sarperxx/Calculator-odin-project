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
      alert(addition(n1, n2));
      break;
    case "-":
      console.log("passing through switch - ");
      alert(substraction(n1, n2));
      break;
    case "*":
      console.log("passing through switch * ");
      alert(multiply(n1, n2));
      break;
    case "/":
      console.log("passing through switch * ");
      alert(division(n1, n2));
      break;
  }
}
function dis(val) {
  calcInput.value += val;
}

function clr() {
  calcInput.value = "";
}
if (calcInput.innerText.includes("=")) {
  if (calcInput.innerText.includes("+")) {
    const splitStuff = calcInput.innerText.split("+");
    clr();
    calcInput.value = operate("+", int(splitStuff[0]), int(splitStuff[1]));
  } else if (calcInput.innerText.includes("-")) {
    const splitStuff = calcInput.innerText.split("-");
    clr();
    calcInput.value = operate("-", int(splitStuff[0]), int(splitStuff[1]));
  } else if (calcInput.innerText.includes("*")) {
    const splitStuff = calcInput.innerText.split("*");
    clr();
    calcInput.value = operate("*", int(splitStuff[0]), int(splitStuff[1]));
  } else if (calcInput.innerText.includes("/")) {
    const splitStuff = calcInput.innerText.split("/");
    clr();
    calcInput.value = operate("/", int(splitStuff[0]), int(splitStuff[1]));
  }
}
