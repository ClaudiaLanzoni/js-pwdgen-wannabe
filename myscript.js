var nome = prompt("Inserisci il tuo nome");

var cognome = prompt("Inserisci il tuo cognome");

var colorePreferito = prompt("Inserisci il tuo colore preferito");


//parte aggiuntiva per inserire specifica su dati inseriti
document.getElementById("nome").innerHTML = nome;
document.getElementById("cognome").innerHTML = cognome;
document.getElementById("colore-preferito").innerHTML = colorePreferito;


//esercizio richiesto
document.getElementById("password").innerHTML = nome + cognome + colorePreferito + "21";

