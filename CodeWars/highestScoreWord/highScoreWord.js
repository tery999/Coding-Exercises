function high(x){
    const allLetter = "abcdefghijklmnopqrstuvwxyz";
    let arrWords = x.split(" ");
    let arrValue = [];

    arrWords.forEach(word => {
        let wordValue = 0;
        for ( let letter of word) {
            let letterValue = allLetter.indexOf(letter) + 1;
            wordValue += letterValue;
        }

        arrValue.push(wordValue)
    });

    let highestValue = Math.max(...arrValue);
    let indexOfHighestVal = arrValue.indexOf(highestValue)

    return arrWords[indexOfHighestVal];

}

console.log( high('climbing volcano'));

//another way, that doesnt seem to be working

// function highTwo(x){
//     let wordsArr = x.split(" ");
//     let highestWord = wordsArr[0];
//     let highestWordValue = 0;
    
//     for ( let lett of highestWord) {
//         highestWordValue += lett.charCodeAt(0);
//     }

//     for ( let i = 1 ; i < wordsArr.length; i ++) {
//         let currentWordVal = 0;
//         for ( let letter of wordsArr[i]) {
//             currentWordVal += letter.charCodeAt(0);
//         }

//         if (currentWordVal > highestWordValue) {
//             highestWord = wordsArr[i];
//             highestWordValue = currentWordVal;
//         }
//     }

//     return highestWord;

// }

// console.log( highTwo('climbing volcano'));