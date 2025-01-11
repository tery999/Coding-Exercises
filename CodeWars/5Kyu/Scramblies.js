function scramble(str1, str2) {
    
    for( let i = 0; i < str2.length; i++) {
        let curLetter = str2.charAt(i);
        let curLetterIndex = str1.indexOf(curLetter);
        if (str1.includes(curLetter) ) {
            str1 = str1.slice(0,curLetterIndex) + str1.slice(curLetterIndex+1);
        } else {
            return false;
        }
    }


    return true;
  }

  console.log( scramble ('rkqodlw',           'world' ))