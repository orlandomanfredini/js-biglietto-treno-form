// ---- MILESTONE 1:
// Modifichiamo la logica dell’esercizio di ieri in modo che i dati non arrivino da un prompt ma da un form che l’utente deve compilare.
// Usando esclusivamente due input: un input per i km e un input per l’età, e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo nello stesso modo che avete usato ieri.
// La risposta finale (o output) sarà anch’essa da scrivere in console.  


// Creare collegamento utilizzano document.getElementById

const elementTrip = document.getElementById('distance'); //element


const elementAge = document.getElementById('age-user');  //element


const elementButton = document.getElementById('create-ticket'); //element


const elementFinalPrice = document.getElementById('input-price'); //element


let tariffa = elementTrip.value * 0.21; //number






//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo del biglietto.

elementButton.addEventListener('click', function () {
    
    const age = parseInt(elementAge.value); // number
    const km = parseFloat(elementTrip.value); // float

    const tariffa = km * 0.21; // float

    

    

    
    if (age < 18) {
        
        elementFinalPrice.value = (tariffa - tariffa * 0.2).toFixed(2)
     
    } else if (age > 65) {
        elementFinalPrice.value = (tariffa - tariffa * 0.4).toFixed(2)
        

    } else {
        elementFinalPrice.value = (tariffa).toFixed(2)
    }
    
});

