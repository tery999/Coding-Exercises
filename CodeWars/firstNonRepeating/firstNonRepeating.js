function firstNonRepeatingLetter(s) {
    let wordArr = s.split("")
    let removedArr = [];

   for ( let i = 0 ; i < wordArr.length ; i++) {
        for ( let j = i+1; j<wordArr.length; j++) {
            if (wordArr[i].toLowerCase() === wordArr[j].toLowerCase()) {
                wordArr = wordArr.filter ( (x) => x!==wordArr[i]);
                i = 0;
                j = 0;
            }
        }
   }
 
   if (wordArr.length === 0 ) {
    return ""
   }
    return wordArr[0];
  }

  console.log( firstNonRepeatingLetter('ttt'));