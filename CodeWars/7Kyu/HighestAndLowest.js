function highAndLow(numbers){
    let arr = numbers.split(" ");
    let highest = arr.sort((a,b) => Number(b)- Number(a))[0];
    let lowest = arr.sort( (a,b) => Number(a)- Number(b))[0]

    let result = highest + " " + lowest;
    return result;
  }

  console.log( highAndLow ( "8 3 -5 42 -1 0 0 -9 4 7 4 -4"))