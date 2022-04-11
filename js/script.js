
/* 
1. Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.
2. Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


//chiediamo all'utente la sua mail




const btn = document.querySelector('button')
const utentiAutorizzati = ['ciao', 'stella', 'banana', 'luce'];


console.log(utentiAutorizzati);

btn.addEventListener('click', function(){

    const mailUtente = document.getElementById('mail-inserita').value;
    let verificaMail = false;

    for(let i = 0; i < utentiAutorizzati.length; i++){

        
        
        if(mailUtente === utentiAutorizzati[i]){
            console.log("si");
            verificaMail = true;
        }
    }

    if(verificaMail){
        console.log('è presente in lista');
        document.getElementById('mail').innerHTML = "Autorizzato"
    }else{
        console.log('NON presente in lista');
        document.getElementById('mail').innerHTML = "Non Autorizzato"
    }
})