// ---- MILESTONE 1:
// Modifichiamo la logica dell’esercizio di ieri in modo che i dati non arrivino da un prompt ma da un form che l’utente deve compilare.
// Usando esclusivamente due input: un input per i km e un input per l’età, e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo nello stesso modo che avete usato ieri.
// La risposta finale (o output) sarà anch’essa da scrivere in console.  


// Creare collegamento utilizzano document.getElementById

const elementTrip = document.getElementById('distance'); //element


const elementAge = document.getElementById('discount');  //element


const elementButton = document.getElementById('create-ticket'); //element


const putName = document.getElementById('put-your-name') ; //element










//  Cliccando sul bottone recuperate i valori delle input e calcolate il prezzo del biglietto.

elementButton.addEventListener('click', function () {
    // calcolo la tariffa per km 
    const km = parseFloat(elementTrip.value); // float
    const tariffa = km * 0.21; // float

    // assegno ad una variabile il codice che deve stampare

    const cardInfo = 
    `<div class="output-card">
    <h3 class="title-output">INFO PASSEGERO</h3>
    <div class="row">
       <div class="col-4">
           <div class="cell-input">
               <strong> Nome passeggero </strong>
               <span id="user-name"></span>
           </div>
       </div>
       <div class="col-2">
           <div class="cell-input">
               <strong>Km da percorrere</strong>
               <span id="total-km"></span>
           </div>
       </div>
       <div class="col-2">
           <div class="cell-input">
               <strong>Tipo di sconto</strong>
               <span id="info-discount"></span>
           </div>
       </div>
       <div class="col-2">
           <div class="cell-input">
               <strong>Prezzo finale</strong>
               <span id="input-price"> </span>
           </div>
       </div>
   </div>
</div>`
    


    // collego l'elemento su cui devo stamopare biglietto info
    const cardAppend = document.getElementById('card-last-ticket'); //element
    cardAppend.innerHTML = cardInfo
 
 
    // collego casella del prezzo tot
    const elementFinalPrice = document.getElementById('input-price'); //element
    
    // collego casella tot km
    const totalKm = document.getElementById('total-km')
    totalKm.innerHTML = km + ' Km'
    
    // collego casella sconto
    const infoDiscount = document.getElementById('info-discount')
    infoDiscount.innerHTML = elementAge.value
    
    //  collego casella del nome passegero
    const outputName = document.getElementById('user-name')
    outputName.innerHTML = putName.value
    

// se l'opzione sconto selezionata è di valore minorenne sconto 20%
if (elementAge.value === 'Minorenne') {
        
        elementFinalPrice.innerHTML ='€ ' + tariffa - (tariffa * 0.2).toFixed(2)
     

    // altrimenti se ozione sconto selezionata è di valore over 65 sconto 40%
    } else if (elementAge.value === 'Over 65') {
        elementFinalPrice.innerHTML = '€ ' + tariffa - (tariffa * 0.4).toFixed(2)
        


    // altrimenti tariffa standard
    } else {
        elementFinalPrice.innerHTML = '€ ' + tariffa.toFixed(2)
    
    }

    

});

// creo variabile e le assegno un elemento html button
const resetButton = document.getElementById('reset-btn')


// creo funzione per ricaricare valori delle input della prima card 
resetButton.addEventListener('click', function(){
     
    elementTrip.value = ''
    elementAge.value = 'default'
    putName.value = ''
})                                      




    


