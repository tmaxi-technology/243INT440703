const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === "") return;
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return;
  display.value += op;
}

function appendFunction(func) {
  display.value = func + display.value;
}

function appendDot() {
  const parts = display.value.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes(".")) {
    display.value += ".";
  }
}

function clearAll() {
  display.value = "";
}

function clearEntry() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
