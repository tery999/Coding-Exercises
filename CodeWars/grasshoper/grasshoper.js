var summation = function (num) {
    let sum = 0;

    for( let i = 0; i <= num; i++) {
        sum += i;
    }

    return sum;
  }

  console.log(summation(5))