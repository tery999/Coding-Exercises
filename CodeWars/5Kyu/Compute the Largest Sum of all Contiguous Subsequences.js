function largestSum(arr){
    if (arr.length === 0) {
        return 0;
    }

    let curLargest = 0;
    for ( let i = 0 ; i < arr.length ; i++) {
        let curSum = 0;
        for ( let k = i; k < arr.length; k++) {
            curSum += arr[k];
            if ( curSum > curLargest) {
                curLargest = curSum;
            }
        }
    }

    if ( curLargest === 0 ) {
        return 0;
    }

    return curLargest;
  }
  //works but not optimised for large numbers


  console.log( largestSum([31,-41,59,26,-53,58,97,-93,-23,84]))