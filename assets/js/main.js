/* 
Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const cars = [
    {
        marca: 'Fiat',
        modello: '500X',
        alimentazione: 'Diesel'
    },

    {
        marca: 'Tesla',
        modello: 'Model 3',
        alimentazione: 'Elettrica'
    },

    {
        marca: 'Jeep',
        modello: 'Renegade',
        alimentazione: 'Diesel'
    },

    {
        marca: 'Suzuki',
        modello: 'Jimny',
        alimentazione: 'Gpl'
    },

    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Metano'
    },

    {
        marca: 'Lamborghini',
        modello: 'Gallardo',
        alimentazione: 'Benzina'
    },

    {
        marca: 'Tesla',
        modello: 'Model S',
        alimentazione: 'Elettrica'
    },

    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'Gpl'
    },

    {
        marca: 'Fiat',
        modello: 'Grande Punto',
        alimentazione: 'Metano'
    },

    {
        marca: 'Fiat',
        modello: 'Bravo',
        alimentazione: 'Metano'
    },
]

const benzina = cars.filter(car => {
    if (car.alimentazione === 'Benzina') {
        return true;
    }
});
console.log(benzina);

const diesel = cars.filter(car => {
    if (car.alimentazione === 'Diesel') {
        return true;
    }
});
console.log(diesel);