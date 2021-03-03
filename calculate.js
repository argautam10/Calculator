var btn = document.getElementsByClassName("oprand");
var displayHistory = document.getElementById("history");
var displayResult = document.getElementById("value");

var operand1 = "0";
var operand2 = null;
var operator = null;

function doOperation(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

//  doing calculation

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var text = displayHistory.textContent.trim();

    if (doOperation(value)) {
      operator = value;
      operand1 = parseFloat(text);
      displayHistory.textContent = "";
    } else if (value == "ac") {
      displayHistory.textContent = "";
      displayResult.textContent = "";
    } else if (value == "sign") {
      operand1 = parseFloat(text);
      operand1 = -1 * operand1;
      displayHistory.textContent = operand1;
    } else if (value == "%") {
      operand1 = parseFloat(text);
      operand1 = operand1 / 100;
      displayHistory.textContent = operand1;
    } else if (value == ".") {
      if (text.length && !text.includes(".")) {
        displayHistory.textContent = text + ".";
      }
    } else if (value == "-") {
    } else if (value == "=") {
      operand2 = parseFloat(text);

      var result = eval(operand1 + " " + operator + " " + operand2);
      if (result) {
        displayResult.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
      }
    } else {
      displayHistory.textContent += value;
    }
  });
}
