//alert("hello")

//testing button function

const sevenButton = document.getElementById("seven-btn");
const numberBox = document.getElementById("number-box");

console.log(sevenButton);
console.log(numberBox);

sevenButton.addEventListener("click", pressSeven);

function pressSeven() {
	numberBox.value = 7;
}
