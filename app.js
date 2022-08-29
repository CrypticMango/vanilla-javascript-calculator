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

//Operation button variables

const clear = document.getElementById("clear-btn");
const plusMinus = document.getElementById("plus-minus-btn");
const percentage = document.getElementById("percentage-btn");
const divide = document.getElementById("division-btn");
const multiply = document.getElementById("multiply-btn");
const minus = document.getElementById("minus-btn");
const add = document.getElementById("addition-btn");
const equals = document.getElementById("equals-btn");

console.log(sevenButton);
console.log(numberBox);

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


function pressZero() {
	numberBox.value = 0;
}

function pressOne() {
	numberBox.value = 1;
}

function pressTwo() {
	numberBox.value = 2;
}

function pressThree() {
	numberBox.value = 3;
}

function pressFour() {
	numberBox.value = 4;
}

function pressFive() {
	numberBox.value = 5;
}

function pressSix() {
	numberBox.value = 6;
}

function pressSeven() {
	numberBox.value = 7;
}

function pressEight() {
	numberBox.value = 8;
}

function pressNine() {
	numberBox.value = 9;
}

function pressDecimal() {
	numberBox.value = '.';
}