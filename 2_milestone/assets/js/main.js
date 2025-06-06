// Logica dal milestone 1

/* const formEl = document.querySelector('form'), 
kmNumberEl = document.getElementById('km_number'),
userAgeEl = document.getElementById('user_age');

formEl.addEventListener('submit', (e)=>{
    //e.preventDefault();
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
}); */

/*
MILESTONE 2:

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

const 
formEl = document.querySelector('form'), 
kmNumberEl = document.getElementById('km_number'),
userAgeEl = document.getElementById('user_age'),
basePriceOutputEl = document.querySelector('.base_price'),
discountOutputEl = document.querySelector('.discount'),
totalPriceOutputEl = document.querySelector('.total_price');

// log to check correct assigning

console.log(basePriceOutputEl, discountOutputEl, totalPriceOutputEl);


formEl.addEventListener('submit', (e)=>{
    e.preventDefault();
    let basePrice = kmNumberEl.value * 0.21;
    basePriceOutputEl.innerHTML = `Prezzo base del biglietto: ${basePrice.toFixed(2)} €`;
    if (userAgeEl.value < 18) {
        let youngDiscount = basePrice / 100 * 20;
        discountOutputEl.innerHTML = `Sconto giovani applicato: ${youngDiscount.toFixed(2)} €`
        let totalPrice = basePrice - youngDiscount;
        totalPriceOutputEl.innerHTML = `Prezzo totale: ${totalPrice.toFixed(2)} €`;
    } else if (userAgeEl.value >= 65) {
        let seniorDiscount = basePrice / 100 * 40;
        discountOutputEl.innerHTML = `Sconto senior applicato: ${seniorDiscount.toFixed(2)} €`;
        let totalPrice = basePrice - seniorDiscount;
        totalPriceOutputEl.innerHTML = `Prezzo totale: ${totalPrice.toFixed(2)} €`;
    } else {
        let totalPrice = basePrice;
        discountOutputEl.innerHTML = `Nessuno sconto applicabile`;
        totalPriceOutputEl.innerHTML = `Prezzo totale: ${totalPrice.toFixed(2)} €`;
    };
});





