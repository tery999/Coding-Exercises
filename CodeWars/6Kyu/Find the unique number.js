function findUniq(arr) {
    let sorted = arr.sort()

    if ( sorted[0] === sorted[1]) {
        return sorted[sorted.length-1]
    } else {
        return sorted[0]
    }

  }
  

  console.log( findUniq([1,2,1]) );