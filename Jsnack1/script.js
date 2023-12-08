/* Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */
console.log("ciao");

const number1 = prompt("digita il primo numero");

const number2 = prompt("digita il secondo numero");

if (number1 > number2) {
  console.log(number1);
} else if (number2 > number1) {
  console.log(number2);
} else {
  console.log("i numeri sono pari ");
}
