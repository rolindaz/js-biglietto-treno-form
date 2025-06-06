/* Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.*/

// Scrivere un programma che chieda all’utente:

// Il numero di chilometri da percorrere

const formEl = document.querySelector('form');
console.log(formEl);


const kmNumberEl = document.getElementById('km_number');

console.log(kmNumberEl.value); // empty string is logged


// Età del passeggero

const userAgeEl = document.getElementById('user_age');

console.log(userAgeEl.value); // empty string is logged

// prevent default behaviour of form to save the input values

/* formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
    console.log(kmNumberEl.value, userAgeEl.value);
}); */

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

let basePrice = kmNumberEl.value * 0.21;
console.log(`Prezzo base del biglietto: ${basePrice.toFixed(2)} €`);

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

if (userAgeEl.value < 18) {
    let totalPrice = basePrice * 0.8;
    console.log(totalPrice.toFixed(2));
} else if (userAgeEl.value >= 65) {
    let totalPrice = basePrice * 0.6;
    console.log(totalPrice.toFixed(2));
} else {
    let totalPrice = basePrice;
    console.log(totalPrice.toFixed(2));
};

// voglio che questa sequenza condizionale venga eseguita ad ogni submit click

formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(kmNumberEl.value, userAgeEl.value);
    let basePrice = kmNumberEl.value * 0.21;
    console.log(`Prezzo base del biglietto: ${basePrice.toFixed(2)} €`);
    if (userAgeEl.value < 18) {
        let youngDiscount = basePrice / 100 * 20;
        console.log(`Sconto giovani applicato: ${youngDiscount.toFixed(2)} €`);
        let totalPrice = basePrice - youngDiscount;
        console.log(`Prezzo totale: ${totalPrice.toFixed(2)} €`);
    } else if (userAgeEl.value >= 65) {
        let seniorDiscount = basePrice / 100 * 40;
        console.log(`Sconto senior applicato: ${seniorDiscount.toFixed(2)} €`);
        let totalPrice = basePrice - seniorDiscount;
        console.log(`Prezzo totale: ${totalPrice.toFixed(2)} €`);
    } else {
        let totalPrice = basePrice;
        console.log(`Nessuno sconto applicabile; Prezzo totale: ${totalPrice.toFixed(2)} €`);
    };
}); 









