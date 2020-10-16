/*
*Jsnacks1
*/

//Inserimento dati
var numero1 = parseInt( prompt('Inserire il primo numero') );
var numero2 = parseInt( prompt('Inserire il secondo numero') );

//Richiesta
if (numero1 > numero2) {
  console.log('Il primo numero ' + numero1 + ' e maggiore');
}
else if (numero1 < numero2) {
  console.log('Il secondo numero ' + numero2 + ' e maggiore');
}
else {
  console.log('I due numeri inseriti sono uguali');
}


/*
*Jsnacks2
*/

//Inserimento dati
var parola1 = prompt('Inserire la prima parola');
var parola2 = prompt('Inserire la seconda parola');

//Richiesta
if (parola1.length > parola2.length) {
  console.log(parola2 + ' ' + parola1);
}
else if (parola1.length < parola2.length) {
  console.log(parola1 + ' ' + parola2);
}
else {
  console.log('Entrambe parole hanno la stezza lunghezza');
}


/*
*Jsnacks3
*/

//Inserimento dati
var somma = 0;

// Richiesta esecuzione for
for (var i = 0; i <= 4 ; i++) {
  var numero = parseInt( prompt('Inserire un numero') );
  somma += numero;
}
console.log(somma);


/*
*Jsnacks4
*/

//Inserimento dati
var invitati = ['paolo', 'fabio', 'lorenzo']

var nomeInvitato = prompt('Fornire il tuo nome');

var nomeList = false;

// Richiesta
for (var i = 0; i < invitati.length; i++) {
  if  (nomeInvitato == invitati[i]){
      nomeList = true;
  }
}

if (nomeList == true) {
  console.log('Benvenuto! Puoi partecipare alla festa');
}
else {
  console.log('Mi dispiace! Non puoi partecipare alla festa!');
}


/*
*Jsnacks5
*/

//Inserimento dati
var arrayNumero = [];

//Richiesta
for (var i = 0; i < 6; i++) {
  var numero = parseInt( prompt('Inserire un numero') );

  if (numero % 2 != 0) {
      arrayNumero.push(numero);
  }
}
console.log(arrayNumero);
