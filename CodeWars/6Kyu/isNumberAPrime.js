// square root worked
function isPrime(num) {
    let  squareNum = Math.sqrt(num);
    if ( num === 0 || num === 1 || num < 0) {
        return false;
    }

    if ( num === 2) {
        return true;
    }

    //adding additional checks to hopefully pass the time limit given
    if ( num >= 10 ) {
        let numAsString = num.toString();
        let lastNumb = numAsString[numAsString.length - 1]
        if ( lastNumb == 0 || lastNumb == 2 || lastNumb == 4  ||
            lastNumb == 6 || lastNumb == 8 || lastNumb == 5 ) {
                return false;
            }
    }

   // num/2 not enough, try with squared root
   for ( let i = 2; i < squareNum + 1; i ++) {
    if ( num % i === 0 ) {
        return false;
    }
   }

   return true;
  }

  console.log( isPrime(2));