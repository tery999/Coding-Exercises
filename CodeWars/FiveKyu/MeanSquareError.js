var solution = function(firstArray, secondArray) {
  let differenceArr = [];

  for ( let i = 0 ; i < firstArray.length ; i ++) {
    let difference = firstArray[i]-secondArray[i];
    differenceArr.push((difference*difference));
  }

  let totalVal = differenceArr.reduce( (a,b) => a+b)
  return totalVal/differenceArr.length;
}

console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]))