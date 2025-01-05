function digPow(n, p){
    let digitsAsString = n.toString();
    let digits = digitsAsString.length;
    let powerOfDig = p;
    let totalAcc = 0;

    for ( let i = 0; i< digits; i++) {
        let curNum = Number ( digitsAsString.charAt(i) );
        totalAcc += Math.pow( curNum, powerOfDig);
        powerOfDig ++;
    }


    if (totalAcc % n === 0) {
        return totalAcc/n;
    } else {
        return -1;
    }

  }

  console.log ( digPow(46288, 3))