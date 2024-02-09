let display = document.getElementById("display");
let expression = "";

function appendValue(value) {
  expression += value;
  display.textContent = expression;
}

function clearDisplay() {
  expression = "";
  display.textContent = "0";
}

function calculate() {
  try {
    let result = eval(expression);
    display.textContent = result;
    expression = "";
  } catch (error) {
    display.textContent = "Error";
  }
}
