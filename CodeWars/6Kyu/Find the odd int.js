function findOdd(A) {

    for ( let i = 0 ; i < A.length; i ++) {
        let count = 0;
        for ( let j = 0 ; j < A.length; j++) {
            if ( A[i] === A[j]) {
                count ++;
            }
        }
        if ( count % 2 !== 0) {
            return A[i];
        }
        count = 0;
    }
  }

  console.log(findOdd([0,1,0,1,0]))