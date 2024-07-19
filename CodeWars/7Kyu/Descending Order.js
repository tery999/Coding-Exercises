function descendingOrder(n){
    let numbersAsArr = n.toString().split("");
    let sorted = numbersAsArr.sort( (a,b) => b - a);
    return Number( sorted.join("") );
  }

  console.log(descendingOrder(42145))