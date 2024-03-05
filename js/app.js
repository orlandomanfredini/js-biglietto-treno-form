// ---- MILESTONE 1:
// Modifichiamo la logica dell’esercizio di ieri in modo che i dati non arrivino da un prompt ma da un form che l’utente deve compilare.
// Usando esclusivamente due input: un input per i km e un input per l’età, e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo nello stesso modo che avete usato ieri.
// La risposta finale (o output) sarà anch’essa da scrivere in console.  


// Creare collegamento utilizzano document.getElementById

const elementTrip = document.getElementById('distance'); //element


const elementAge = document.getElementById('discount');  //element


const elementButton = document.getElementById('create-ticket'); //element


const elementFinalPrice = document.getElementById('input-price'); //element




//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo del biglietto.

elementButton.addEventListener('click', function () {
    
    const km = parseFloat(elementTrip.value); // float
    const tariffa = km * 0.21; // float

     

    
if (elementAge.value === '1') {
        
        elementFinalPrice.value = (tariffa - tariffa * 0.2).toFixed(2)
     
    } else if (elementAge.value === '2') {
        elementFinalPrice.value = (tariffa - tariffa * 0.4).toFixed(2)
        

    } else {
        elementFinalPrice.value = (tariffa).toFixed(2)
    
    }

    const totalKm = document.getElementById('total-km')
    totalKm.value = km + ' Km'
    
    const infoDiscount = document.getElementById('info-discount')
    infoDiscount.value = elementAge.value


    
});

