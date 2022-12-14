/* 
Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

// creo un array di animali
const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
]

// creo un nuovo array con la lista dei mammiferi
const mammiferi = animals.filter(animal => {
    if (animal.classe === 'mammiferi') {
        return true;
    }
});

console.log(mammiferi);