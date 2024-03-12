//- L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.
let wordLongest = '';
let wordShort='';
let word = prompt('inserisci parola');
let word2 = prompt('inserisci parola');
if (word.length > word2.length){
    wordLongest = word;
    wordShort = word2;
    
} else {
    wordLongest = word2;
    wordShort = word;
}
let myDiv1 = document.createElement('div');
let myDiv2 = document.createElement('div');

myDiv1.innerHTML = (wordShort);
myDiv2.innerHTML = (wordLongest);
document.querySelector('.container').append(myDiv1);
document.querySelector('.container').append(myDiv2);

