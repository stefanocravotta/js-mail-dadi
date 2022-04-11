
/* 
1. Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.
2. Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


// 1 chiediamo all'utente la sua mail




const btn = document.querySelector('button')
const utentiAutorizzati = ['stefano.cravotta8@gmail.com', 'peppino54@hotmail.it', 'maccio99@libero.it', 'fiorenzogigli@outlook.com'];


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


// 2 genera un numero random


const min = 1;
const max = 6;

const numeroUtente = ( Math.floor(Math.random() * (max - min + 1))  + min);
const numeroPc = ( Math.floor(Math.random() * (max - min + 1))  + min);

console.log(numeroUtente);
console.log(numeroPc);


let vittoria = true;
let pari = false;
let output = document.getElementById("risultato");

const btnNumero = document.getElementById('scegli-numero');
const btnAnnulla = document.getElementById('annulla');

btnNumero.addEventListener('click', function(){
    
        document.getElementById("numero-utente").innerHTML = `Ecco il tuo numero <br> ${numeroUtente}`;
        console.log(numeroUtente);
        document.getElementById("numero-pc").innerHTML = `Pc number <br> ${numeroPc}`;
        
        document.querySelector(".small-box").classList.add('sc-box');
        document.querySelector(".small-box-2").classList.add('sc-box');

        
        if(numeroUtente === numeroPc){
            pari = true;
            vittoria = false;
        }else if(numeroUtente < numeroPc){
            vittoria = false;
        }
        
        
        if(vittoria){
        output.innerHTML = "Complimenti hai vinto !!!!!!";
        }else if(pari){
        output.innerHTML= "Parità -_-";
        }else{
            output.innerHTML= "Fregati hai perso !!!!!!";
        }
    

})

btnAnnulla.addEventListener('click', function(){

    document.getElementById("numero-utente").innerHTML="";
    document.getElementById("numero-pc").innerHTML="";

    document.querySelector(".small-box").classList.remove('sc-box');
    document.querySelector(".small-box-2").classList.remove('sc-box');

        

    if(vittoria){
        output.innerHTML="";
     }else{
            output.innerHTML="";
             }

})







/* 


document.getElementById('numero-utente').innerHTML =`numeroUtente`
document.getElementById('numero-pc').innerHTML = numeroPc;
 */