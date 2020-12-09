// Generatore di “nomi cognomi” casuali:

// prendendo una lista di nomi
const nomi = ["gabriele", "luca", "marco"];

// numero utente
let numeroUtente = 3;

// e una lista di cognomi.
const cognomi = ["rossi", "bianchi", "verdi"];

// Gatsby vuole generare una falsa lista di invitati.
const generatoreLista = (nomi, cognomi, numeroUtente) => {
  var casuali = [];
  for (var i = 0; i < numeroUtente; i++) {
    var x = Math.floor(Math.random()* nomi.length);
    var y = Math.floor(Math.random()* cognomi.length);
    casuali[i] = nomi[x] + " " + cognomi[y];
  }
  return casuali;
};

// function generatoreLista(nomi, cognomi, numeroUtente) {
//   var casuali = [];
//   for (var i = 0; i < numeroUtente; i++) {
//     var x = Math.floor(Math.random()* nomi.length);
//     var y = Math.floor(Math.random()* cognomi.length);
//     casuali[i] = nomi[x] + " " + cognomi[y];
//   }
//   return casuali;
// }

console.log(generatoreLista(nomi, cognomi, numeroUtente));
