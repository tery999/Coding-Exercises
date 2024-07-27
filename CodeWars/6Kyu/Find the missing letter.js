function findMissingLetter(array){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    if ( array[0] === array[0].toUpperCase()) {
        alphabet = alphabet.toUpperCase();
    }
    let firstLetter = array[0];
    let lastLetter = array[array.length-1]

    let firstLetterPosition = alphabet.indexOf(firstLetter)
    let lastLetterPosition = alphabet.indexOf(lastLetter)

    for ( let i = firstLetterPosition; i < lastLetterPosition; i++) {
        if ( alphabet[i] !== array[i-firstLetterPosition]) {
            return alphabet[i];
        }
    }

}

console.log( findMissingLetter(["U","V","X"]));