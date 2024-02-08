let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const multi = numberOne * numberTwo;
const div = numberOne / numberTwo;
const restDiv = numberOne % numberTwo;
const oddPair = sum % 2;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${multi}`);
alert(`A divisão dos dois números é: ${div.toFixed(2)}`);
alert(`O resto da divisão dos dois números é: ${restDiv}`);
if (oddPair == 0) {
  alert(`A soma dos dois números é par: ${sum}`);
} else {
  alert(`A soma dos dois números é impar: ${sum}`);
}
if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais");
} else {
  alert("Os números inseridos são diferentes");
}
