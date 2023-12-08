console.log("ciao");
/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const word1 = prompt("inserisci la prima parola.");
const word2 = prompt("inserisci la seconda parola.");

if (word1.length > word2.length) {
  console.log(word2, word1);
} else if (word2.length > word1.length) {
  console.log(word1, word2);
} else {
  console.log("le due parole sono della stessa lunghezza", word1, word2);
}
