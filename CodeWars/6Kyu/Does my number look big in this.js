function narcissistic(value) {
    let totalNumber = 0;
    let numAsString = value.toString();

    for ( let i = 0; i < numAsString.length; i ++) {
        let stringAsNumber = Number(numAsString[i])
        totalNumber += Math.pow( stringAsNumber, numAsString.length)
    }

    return totalNumber === value;
  }

  console.log(narcissistic(153))