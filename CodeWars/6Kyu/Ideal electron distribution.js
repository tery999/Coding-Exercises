function atomicNumber(num){
    let atom = [];
    let currentPosition = 1;
    let availableAtoms = num;

    //For example, maximum number of electrons in 3rd shell is 2*3^2 = 18.
    while ( availableAtoms > 0 ) {
        let atomsNeeded = 2* ( Math.pow(currentPosition, 2));

        if ( availableAtoms - atomsNeeded >= 0 ) {
            atom.push ( atomsNeeded );

            availableAtoms -= atomsNeeded;
            currentPosition ++;
        }
        else {
            atom.push(availableAtoms);
            break;
        }

    }
    return atom;
    
  }

  console.log ( atomicNumber(11) );