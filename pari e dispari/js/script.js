// chiedre all'utente "pari o dispari?"
const userChoice = prompt("pari o dispari?");

console.log(userChoice);

// chiedre all'utente un numero da 1 a 5

const userNumber = parseInt(prompt("scegli un numero da 1 a 5"));

console.log(userNumber);

// generare un numero random per il computer da 1 a 5

function genRndNumber(min, max) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    return rndNumber;
}

const computerNumber = genRndNumber(1, 5);

console.log(computerNumber);

// sommare i numeri dell'utente e del computer

const sum = userNumber + computerNumber;

console.log(sum);

// creare una funzione per stabilire se la somma dei due numeri è pari o dispari

function oddEven(numberToText) {
    let result = "";

    if (numberToText % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }

    return result;
}

const resultSum = oddEven(sum);

console.log(resultSum)

// creare un if per stabilire se l'utente ha vinto o perso

if (resultSum === userChoice) {
    console.log("you won");
} else {
    console.log("you lost");
}