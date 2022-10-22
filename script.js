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
	let output;
	const firstNumber = parseFloat(previousOperand);
	const secondNumber = parseFloat(currentOperand);
	if (isNaN(firstNumber) || isNaN(secondNumber)) return;
	switch (operation) {
		case "+":
			output = firstNumber + secondNumber;
			break;
		case "-":
			output = firstNumber - secondNumber;
			break;
		case "x":
			output = firstNumber * secondNumber;
			break;
		case "÷":
			if (secondNumber === 0) {
				output = "ERROR!";
				break;
			} else {
				output = firstNumber / secondNumber;
				break;
			}
		case "%":
			output = (firstNumber / 100) * secondNumber;
			break;
		default:
			return;
	}
	if (output.toString().includes(".")) {
		if (output.toString().split(".")[1].length > 3) {
			currentOperand = output.toFixed(3); //rounding off to 3 decimal digits.
		} else {
			currentOperand = output;
		}
	} else {
		currentOperand = output;
		previousOperand = "";
		operation = "";
	}
}
function updateDisplay() {
	currentOperandTextEl.innerText = currentOperand;
	if (operation !== undefined) {
		previousOperandTextEl.innerText = `${previousOperand} ${operation}`;
	} else {
		previousOperandTextEl.innerText = "";
	}
}
function clear() {
	alert("You are about to clear everything!");
	currentOperand = "";
	previousOperand = "";
	operation = undefined;
}
function backSpace() {
	currentOperand = currentOperand.toString().slice(0, -1);
}
