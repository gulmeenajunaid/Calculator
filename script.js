const allButtons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals-btn");
const backspaceButton = document.querySelector(".backspace-btn");
const clearButton = document.querySelector(".clear-btn");
const previousOperandTextEl = document.querySelector(
	".previous-operand-text-el"
);
const currentOperandTextEl = document.querySelector(".current-operand-text-el");
let currentOperand = "";
let previousOperand = "";
let operation = undefined;

function clear() {
	currentOperand = "";
	previousOperand = "";
	operation = undefined;
}
function backSpace() {
	currentOperand = currentOperand.toString().slice(0, -1); //Check if this is a good pattern
}
function appendNumber(number) {
	if (number === "." && currentOperand.includes(".")) return;
	currentOperand = currentOperand.toString() + number.toString();
}
function selectOperation(operator) {
	if (currentOperand === "") return;
	if (previousOperand !== "") {
		calculate();
	}
	operation = operator;
	previousOperand = currentOperand;
	currentOperand = "";
}
function calculate() {
	let output = 0;
	const previousNumber = parseFloat(previousOperand);
	const currentNumber = parseFloat(currentOperand);
	if (isNaN(previousNumber) || isNaN(currentNumber)) return;
	switch (operation) {
		case "+":
			output = previousNumber + currentNumber;
			break;
		case "-":
			output = previousNumber - currentNumber;
			break;
		case "x":
			output = previousNumber * currentNumber;
			break;
		case "÷":
			if (currentNumber === 0) {
				output = "ERROR!";
				break;
			} else {
				output = previousNumber / currentNumber;
				break;
			}
		case "%":
			output = (previousNumber / 100) * currentNumber;
			break;
		default:
			return;
	}
	currentOperand = output;
	previousOperand = "";
	operation = "";
}
function updateDisplay() {
	currentOperandTextEl.innerText = currentOperand;
	if (operation !== undefined) {
		previousOperandTextEl.innerText = `${previousOperand} ${operation}`;
	} else {
		previousOperandTextEl.innerText = "";
	}
}

numberButtons.forEach((button) => {
	button.addEventListener("click", () => {
		appendNumber(button.innerText);
		updateDisplay();
	});
});

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		selectOperation(button.innerText);
		updateDisplay();
	});
});

equalsButton.addEventListener("click", () => {
	calculate();
	updateDisplay();
});

clearButton.addEventListener("click", () => {
	clear();
	updateDisplay();
});

backspaceButton.addEventListener("click", () => {
	backSpace();
	updateDisplay();
});
