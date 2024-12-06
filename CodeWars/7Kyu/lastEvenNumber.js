function evenNumbers(array, number) {
    let evens = array.filter( (num) => num%2 === 0);
    return evens.slice(-number);
  }

  console.log( evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));