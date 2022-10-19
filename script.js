let result = 0;
console.log("hello world");

const buttonList = document.querySelectorAll("button");
const prevExpression = document.querySelector(".previous");

buttonList.forEach(function (button) {
	button.addEventListener("click", (event) => {
		console.log(event.target.textContent);
		prevExpression.textContent =
			prevExpression.textContent + event.target.textContent;
	});
});

function add(num1, num2) {
	result = num1 + num2;
	console.log(result);
	return result;
}
function subtract(num1, num2) {
	result = num1 - num2;
	console.log(result);
	return result;
}
function multiply(num1, num2) {
	result = num1 * num2;
	console.log(result);
	return result;
}
function divide(num1, num2) {
	result = num1 / num2;
	console.log(result);
	return result;
}
function clearInput() {
	result = " ";
	console.log(result);
	return result;
}
