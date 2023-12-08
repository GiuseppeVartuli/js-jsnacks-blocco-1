/* 
Snack 8:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let number = prompt("Digita un numero a 4 cifre."),
  sum = number
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

console.log(sum);
