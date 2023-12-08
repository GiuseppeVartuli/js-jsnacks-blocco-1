/* 
Snack 5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const odd = [];

for (let i = 0; i < 6; i++) {
  let number = prompt("Dimmi un numero.");

  if (number % 2 === 0) {
    console.log(number);
  } else {
    odd.splice(0, number);
    console.log(odd);
  }
}
