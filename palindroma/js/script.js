// richiedere all'utente una parola tramite prompt
const userWord = prompt("scrivi una parola");

console.log(userWord);

// creare un array con la parola data dall'utente, trattando ogni lettera un come singolo elemento
const word = [...userWord];

console.log(word);

// creare un secondo array e un ciclo for per inserire i singoli elementi (lettere della parola) in posizione invertita rispetto al primo array nel secondo array
const wordInvert = [];

for (x = word.length - 1; wordInvert.length < word.length; x--) {
    let y = word[x];
    wordInvert.push(y);
}

console.log(wordInvert);

// creare una funzione che confronti i due array

function compareTwoArray(usWord, wordInv) {
    let result = "";
    if (usWord.toString() === wordInv.toString()) {
        result = "palindroma"
    } else {
        result = "not palindroma"
    }
    return result;
}

compare = compareTwoArray(word, wordInvert);

console.log(compare);