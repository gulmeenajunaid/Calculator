const buttonList = document.querySelectorAll("button");
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operator");
const inputScreen = document.querySelector(".input-screen");
const outputScreen = document.querySelector(".output-screen");
const decimalBtn = document.querySelector(".decimal");
const backBtn = document.querySelector(".backspace-btn");
const clearBtn = document.querySelector(".clear-btn");
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

buttonList.forEach(function (button) {
	button.addEventListener("click", (e) => {
		if (e.target.textContent !== "=") {
			inputScreen.textContent += e.target.textContent;
		}
	});
});

numberBtn.forEach((num) => {
	num.addEventListener("click", (e) => {
		if (operator === " ") {
			num1 += e.target.textContent;
			console.log("num1", num1);
		} else {
			num2 += e.target.textContent;
			console.log("num2", num2);
		}
	});
});

operationBtn.forEach((op) => {
	op.addEventListener("click", (e) => {
		if (e.target.textContent !== "=") {
			operator = e.target.textContent;
			console.log("operator", operator);
		} else {
			switch (operator) {
				case "+":
					addition(num1, num2);
					console.log("result:", result);
					outputScreen.textContent = result;
					num1 = result;
					num2 = "";
					break;

				case "-":
					subtraction(num1, num2);
					console.log("result:", result);
					outputScreen.textContent = result;
					num1 = inputScreen.textContent = result;
					num2 = "";
					break;

				case "x":
					multiplication(num1, num2);
					console.log("result:", result);
					outputScreen.textContent = result;
					num1 = inputScreen.textContent = result;
					num2 = "";
					break;

				case "%":
					percentage(num1, num2);
					console.log("result:", result);
					outputScreen.textContent = result;
					num1 = inputScreen.textContent = result;
					num2 = "";
					break;

				case "÷":
					division(num1, num2);
					console.log("result:", result);
					outputScreen.textContent = result;
					if (result === "ERROR!") {
						num2 = num1 = inputScreen.textContent = "";
					} else {
						num1 = inputScreen.textContent = result;
						num2 = "";
					}
					break;
			}
		}
	});
});

clearBtn.addEventListener("click", () => {
	clear();
});

backBtn.addEventListener(
	"click",
	() => (inputScreen.textContent = inputScreen.textContent.slice(0, -2))
);

function clear() {
	inputScreen.textContent = " ";
	outputScreen.textContent = " ";
	num1 = "";
	num2 = " ";
	operator = " ";
}

function addition(num1, num2) {
	result = parseFloat(num1) + parseFloat(num2);
	return result;
}

function subtraction(num1, num2) {
	result = parseFloat(num1) - parseFloat(num2);
	return result;
}

function multiplication(num1, num2) {
	result = parseFloat(num1) * parseFloat(num2);
	return result;
}

function division(num1, num2) {
	if (num2 === "0") {
		result = "ERROR!";
		return result;
	} else {
		result = parseFloat(num1) / parseFloat(num2);
		return result;
	}
}

function percentage(num1, num2) {
	result = (parseInt(num1) / 100) * parseInt(num2);
	return result;
}
