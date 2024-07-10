function moveZeros(arr) {
  let zeroArr = [];
  let nonZeroArr = [];

  arr.forEach((element, ind) => {
    if (typeof element === "number" && element.toString().includes("0") )  {
      zeroArr.push(arr[ind]);
    } else {
      nonZeroArr.push(arr[ind])
    }
  });

  return nonZeroArr.concat(zeroArr);
}

  console.log( moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0]))