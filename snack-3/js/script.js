//- Crea due tag div con due id diversi:
//un div avrà il testo colorato di rosso mentre l’altro di verde.
//Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const redDiv = document.querySelector('#container-red');
const greenDiv = document.querySelector('#green');
for(let i= 0; i < numberArray.length; i++){
let thisNumber = numberArray[i];
    if(thisNumber % 2 === 0){
    greenDiv.innerHTML += (thisNumber);

    
    } else{
    redDiv.innerHTML += (thisNumber);

    }


}
