function sumDigPow(a, b) {
    let eurikaNumbers = [];

    for ( let i = a ; i <= b; i++) {
        let curNLength = i.toString().length;
        let curNumberStr = i.toString();
        let curNumberTotal = 0;
        for ( let j = 0; j < curNLength; j++) {
            let innerNumb = Number ( curNumberStr[j]) ;
            curNumberTotal += Math.pow( innerNumb, j+1) ;
        }

        if ( curNumberTotal === i) {
            eurikaNumbers.push(curNumberTotal);
        }
    }

    return eurikaNumbers;
  }

  console.log( sumDigPow(1, 10))