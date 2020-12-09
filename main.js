// SNACK 1
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

const palla = {
  nome: "palla",
  peso: 10,
};

// SNACK 2
// Attraverso un prompt dare la possibilità all’utente
// di modificare il peso della palla.

let modifica = Number(prompt("inserisci un peso"));

palla.peso = modifica;
console.log(palla);
