function squareDigits(num){
    let sqrTotal = ""
    let numArr = Array.from(String (num));
    numArr.forEach(element => {
        sqrTotal += Math.pow( Number(element) , 2 );
    });

    return Number(sqrTotal);
  }

  console.log( squareDigits(3212))