
var dataDiOggi = new Date();

console.log(dataDiOggi);

//FORNISCE FORMATO DATA GG/MM/AA PERò NON RENDE POSSIBILE LA SOTTRAZIONE

//var giorno = String(dataDiOggi.getDate()).padStart(2, '0');
//var mese = String(dataDiOggi.getMonth() + 1).padStart(2, '0');
//var anno = dataDiOggi.getFullYear();
//dataDiOggi = giorno + '/' + mese + '/' + anno;
//document.getElementById("data-corrente").innerHTML = dataDiOggi;

var mioCompleanno = new Date("11/28/2021");

console.log(mioCompleanno);

//FORNISCE FORMATO DATA GG/MM/AA PERò NON RENDE POSSIBILE LA SOTTRAZIONE

//var giorno = String(mioCompleanno.getDate()).padStart(2, '0');
//var mese = String(mioCompleanno.getMonth() + 1).padStart(2, '0');
//var anno = mioCompleanno.getFullYear();
//mioCompleanno = giorno + '/' + mese + '/' + anno;
//document.getElementById("mio-compleanno").innerHTML = mioCompleanno;


//CALCOLO DIFFERENZA DI GIORNI TRA LA DATA DEL MIO COMPLEANNO E OGGI
var giorniDifferenza = (Math.floor((mioCompleanno - dataDiOggi) / (1000*60*60*24)));

console.log(giorniDifferenza);


//ALERT DOPO AVER SCHIACCIATO BOTTONE
function calcolatoreCompleanno() {
   alert (giorniDifferenza);
  }


