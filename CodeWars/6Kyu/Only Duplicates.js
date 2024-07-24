function onlyDuplicates(str) {

    let strAsArr = str.split("");
    let duplicates = [];
   for ( let i = 0 ; i < strAsArr.length; i ++) {
        for ( let j = i+1 ; j < strAsArr.length-1; j++) {
            if ( strAsArr[i] === strAsArr[j]) {
                duplicates.push( ...strAsArr.filter( el => el=== strAsArr[i]) );
                break;
            }
        }
   }
    return duplicates.join("");
  }

  console.log( onlyDuplicates('abccdefee'))