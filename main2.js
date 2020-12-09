// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.

const lista = [
  {
    nome: "cannondale",
    peso: 20,
  },
  {
    nome: "colnago",
    peso: 5,
  },
  {
    nome: "wilier",
    peso: 10,
  },
];
console.log(lista);

// Stampare a schermo la bici con peso minore.
lista.forEach(function(){
  lista.sort(function(a, b){
    return a.peso - b.peso;
  });
});

console.log(lista[0].peso);
