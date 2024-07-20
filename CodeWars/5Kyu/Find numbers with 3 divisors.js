function solution(n, m) {
    let arrThreeDiv = [];
    let first = Number(n);
    let second = Number(m);

    for ( let i = first ; i <= second ; i ++) {

        let numberOfDivision = 0;
        for( let j = 2 ; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                numberOfDivision++;
                if (j !== i / j) {
                    numberOfDivision++;
                }
                
                if ( numberOfDivision > 3) {
                    break;
                }
            }
        }

        if ( numberOfDivision === 3) {
            arrThreeDiv.push(BigInt(i));
        }
        numberOfDivision = 0;
    }

    return arrThreeDiv;
  }

  console.log( solution ( 2860267332n, 2860267333n))