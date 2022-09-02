//number button variables

const zeroButton = document.getElementById("zero-btn");
const oneButton = document.getElementById("one-btn");
const twoButton = document.getElementById("two-btn");
const threeButton = document.getElementById("three-btn");
const fourButton = document.getElementById("four-btn");
const fiveButton = document.getElementById("five-btn");
const sixButton = document.getElementById("six-btn");
const sevenButton = document.getElementById("seven-btn");
const eightButton = document.getElementById("eight-btn");
const nineButton = document.getElementById("nine-btn");
const numberBox = document.getElementById("number-box");
const decimalPoint = document.getElementById("decimal-btn");

//number button event listeners

zeroButton.addEventListener("click", pressZero);
oneButton.addEventListener("click", pressOne);
twoButton.addEventListener("click", pressTwo);
threeButton.addEventListener("click", pressThree);
fourButton.addEventListener("click", pressFour);
fiveButton.addEventListener("click", pressFive);
sixButton.addEventListener("click", pressSix);
sevenButton.addEventListener("click", pressSeven);
eightButton.addEventListener("click", pressEight);
nineButton.addEventListener("click", pressNine);
decimalPoint.addEventListener("click", pressDecimal);

//number button functions

function pressZero() {
	numberBox.value = numberBox.value + 0;
}

function pressOne() {
	numberBox.value = numberBox.value + 1;
}

function pressTwo() {
	numberBox.value = numberBox.value + 2;
}

function pressThree() {
	numberBox.value = numberBox.value + 3;
}

function pressFour() {
	numberBox.value = numberBox.value + 4;
}

function pressFive() {
	numberBox.value = numberBox.value + 5;
}

function pressSix() {
	numberBox.value = numberBox.value + 6;
}

function pressSeven() {
	numberBox.value = numberBox.value + 7;
}

function pressEight() {
	numberBox.value = numberBox.value + 8;
}

function pressNine() {
	numberBox.value = numberBox.value + 9;
}

function pressDecimal() {
	numberBox.value = numberBox.value + ".";
}

//Operation button variables

const clear = document.getElementById("clear-btn");
const plusMinusBtn = document.getElementById("plus-minus-btn");
const percentage = document.getElementById("percentage-btn");
const divide = document.getElementById("division-btn");
const multiply = document.getElementById("multiply-btn");
const minus = document.getElementById("minus-btn");
const add = document.getElementById("addition-btn");
const equals = document.getElementById("equals-btn");

//Operation button event listeners

clear.addEventListener("click", pressClear);
plusMinusBtn.addEventListener("click", pressPlusMinus);
add.addEventListener("click", pressAdd);
minus.addEventListener("click", pressMinus);
multiply.addEventListener("click", pressMultiply);
divide.addEventListener("click", pressDivide);
percentage.addEventListener("click", pressPercentage);
equals.addEventListener("click", pressEquals);

//Operation button functions

function pressEquals() {
	result = eval(numberBox.value);
	numberBox.value = result;

	document.getElementById("addition-btn").style.background = "#D1CEC5";
	document.getElementById("minus-btn").style.background = "#D1CEC5";
	document.getElementById("multiply-btn").style.background = "#D1CEC5";
	document.getElementById("division-btn").style.background = "#D1CEC5";
}

function pressPercentage() {
	numberBox.value = "0." + numberBox.value.trim();
}

function pressClear() {
	numberBox.value = " ";
	document.getElementById("addition-btn").style.background = "#D1CEC5";
	document.getElementById("minus-btn").style.background = "#D1CEC5";
	document.getElementById("multiply-btn").style.background = "#D1CEC5";
	document.getElementById("division-btn").style.background = "#D1CEC5";
}

function pressPlusMinus() {
	numberBox.value = "-" + numberBox.value.trim();
}

function pressAdd() {
	document.getElementById("addition-btn").style.background = "#5c5f5f";
	document.getElementById("minus-btn").style.background = "#D1CEC5";
	document.getElementById("multiply-btn").style.background = "#D1CEC5";
	document.getElementById("division-btn").style.background = "#D1CEC5";

	numberBox.value = numberBox.value + "+";
}

function pressMinus() {
	document.getElementById("addition-btn").style.background = "#D1CEC5";
	document.getElementById("minus-btn").style.background = "#5c5f5f";
	document.getElementById("multiply-btn").style.background = "#D1CEC5";
	document.getElementById("division-btn").style.background = "#D1CEC5";

	numberBox.value = numberBox.value + "-";
}

function pressMultiply() {
	document.getElementById("addition-btn").style.background = "#D1CEC5";
	document.getElementById("minus-btn").style.background = "#D1CEC5";
	document.getElementById("multiply-btn").style.background = "#5c5f5f";
	document.getElementById("division-btn").style.background = "#D1CEC5";

	numberBox.value = numberBox.value + "*";
}

function pressDivide() {
	document.getElementById("addition-btn").style.background = "#D1CEC5";
	document.getElementById("minus-btn").style.background = "#D1CEC5";
	document.getElementById("multiply-btn").style.background = "#D1CEC5";
	document.getElementById("division-btn").style.background = "#5c5f5f";

	numberBox.value = numberBox.value + "/";
}