// return the missing number!
function findNumber(array) {
    let sortedArr = array.sort( (a,b) => a-b);
    let missingLink = 0;

    if ( sortedArr[0] !== 1) {
        return 1;
    }

    if ( sortedArr[sortedArr.length-1] === sortedArr.length) {
        return sortedArr[sortedArr.length-1] + 1;
    }

   for ( let i = 0 ; i< sortedArr.length-1; i++) {
    if ( sortedArr[i] + 1 !== sortedArr[i+1]) {
        missingLink = sortedArr[i]+1;
        break;
    }
   }
  return missingLink;
}


console.log(findNumber ( [1,3,4,5,6,7,8] ));