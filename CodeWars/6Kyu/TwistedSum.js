function twistedSum(n) {
   let sum = 0;


   for ( let i = 1 ; i <= n ; i ++) {
    if ( i/10 >= 1) {
        let current = i/10;
        if ( i%10 === 0) {
            sum += Math.floor( i/10)
        } else {
            let nToStr = current.toString()[2];
            sum += Math.floor( i/10) + Number(nToStr);
        }
    } else {
        sum += i;  
    }
   }

   return sum;
  }

  console.log (twistedSum (12))