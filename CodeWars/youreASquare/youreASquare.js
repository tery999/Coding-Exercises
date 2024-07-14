var isSquare = function(n){
    let squared = Math.sqrt(n);

    if ( Number.isInteger(squared) ) {
        return true;
    }

    return false;
  }

  console.log(isSquare(25))