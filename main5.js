// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

let listaVuota = [];
const lista = ["mela", "pera", "pesca", "noce", "susina"];
const a = 1;
const b = 4;

const intermezzo = () => {
  for (let i = a; i < b; i++){
    listaVuota.push(lista[i]);
  };
  return listaVuota;
};
intermezzo();
console.log(listaVuota);
