console.log("ciao");

/* 
Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const guests = ["Giuseppe", "Carmen", "Nicolò"];

let guest = prompt("Qual'è il vostro nome?");

if (guests.includes(guest)) {
  alert("Benveuto , lei può entrare!");
} else {
  alert("Mi dispiace , lei non può entrare!");
}
