// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)
// facciamolo però utilizzando arrow.

const reverseString = (str) => {
  let splitString = str.split("").reverse().join("");
  return splitString;
};

let parola = "ciao";
console.log(reverseString(parola));
