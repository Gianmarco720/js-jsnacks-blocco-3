/* 
Snack 2
A partire da un array di stringhe,
crea un secondo array formattando le stringhe del primo array in minuscolo e
con l’iniziale maiuscola.
*/

// creo un array di nomi
const names = [
    'marco',
    'alberto',
    'roberta',
    'erika',
    'enrica',
    'luigi',
    'giulia'
];

// uso .map per impostare le prime lettere in maiuscolo
const capNames = names.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLocaleLowerCase();
});

// loggo il risultato in console
console.log(capNames);