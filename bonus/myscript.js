
var dataDiOggi = new Date("08/04/2021");
//var giorno = String(dataDiOggi.getDate()).padStart(2, '0');
//var mese = String(dataDiOggi.getMonth() + 1).padStart(2, '0');
//var anno = dataDiOggi.getFullYear();
//dataDiOggi = giorno + '/' + mese + '/' + anno;

document.getElementById("data-corrente").innerHTML = dataDiOggi;

var mioCompleanno = new Date("11/28/2021");
//var giorno = String(mioCompleanno.getDate()).padStart(2, '0');
//var anno = mioCompleanno.getFullYear();
//mioCompleanno = giorno + '/' + mese + '/' + anno;

document.getElementById("mio-compleanno").innerHTML = mioCompleanno;

var differenza = mioCompleanno.getTime() - dataDiOggi.getTime();


var giorniDifferenza = differenza / (1000 * 3600 * 24);

giorniDifferenza = parseInt(giorniDifferenza);

document.getElementById("differenza-giorni").innerHTML = giorniDifferenza;


function calcolatoreCompleanno() {
   alert (giorniDifferenza);
  }


