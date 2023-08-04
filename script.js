// gets input from the user
let n1 = prompt("Please enter the first number");
n1 = parseInt(n1);
let n2 = prompt("Please enter the second number");
n2 = parseInt(n2);
const chooseoperator = prompt("Please choose the operator + - * /");
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

operate(chooseoperator, n1, n2);
