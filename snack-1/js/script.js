//- L'utente inserisce un numero nel prompt, se è pari stampa il numero,
//se è dispari stampa il numero successivo
let userNumber = parseInt(prompt('inserisci un numero'));
console.log(userNumber);
if(userNumber % 2 === 0){
    alert('è pari! ' + userNumber);

} else {
    userNumber += 1
    alert('non è pari, ma questo si ' + userNumber );
}