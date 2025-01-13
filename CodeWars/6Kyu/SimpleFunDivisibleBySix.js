function isDivisibleBy6(s) {
    let allowed = [];

    for( let i = 0 ; i <= 9; i ++) {
        let curN = Number( s.replace("*" , i));
        if ( curN % 6 === 0 ) {
            allowed.push(curN.toString());
        }
    }

    return allowed;
    
    
  }
  // try again for large Number

  // used this https://www.cuemath.com/numbers/divisibility-rule-of-6/ for information
  function isDivisibleBy6Large(s) {
    let allowed = [];

    for( let i = 0 ; i <= 9; i ++) {
        let curN = ( s.replace("*" , i));
        let lastN = curN.charAt(curN.length-1);
        if ( Number(lastN) % 2 === 0) {
            let digitsTotal = 0;
            for ( let j = 0; j < curN.length; j++) {
                digitsTotal += Number ( curN.charAt(j))
            }
            if ( digitsTotal % 3 === 0) {
                allowed.push( curN)
            }
        }
    }

    return allowed;
    
    
  }


  console.log( isDivisibleBy6Large ( "1*0"))