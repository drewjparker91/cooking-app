function galToLit(number1) {
	return number1 * 3.785
}
function tabToCup(number1) {
  return number1 / 16
}
function teaToPint(number1) {
  return number1 / 96
}
function celToFah(number1) {
	return number1 * 9 / 5 + 32 
}
function fahToCel(number2) {
	return (number2 - 32) * 5 / 9
}

const number1 = parseInt(prompt("Enter quantity:"));
const result = galToLit(number1);
alert(result);