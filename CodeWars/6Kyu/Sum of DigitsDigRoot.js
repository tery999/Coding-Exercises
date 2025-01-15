function digitalRoot(n) {
    let numberAsString = n.toString();
    let position = 0;
    let numTotal = 0;
    while ( true ) {
        numTotal += Number ( numberAsString[position] );
        position ++;
        if ( position === numberAsString.length) {
           if ( numTotal.toString().length > 1) {
            numberAsString = numTotal.toString();
            numTotal = 0;
            position = 0;
           } else {
            break;
           }
        }
    }
    return numTotal;

  }

  console.log( digitalRoot(456))