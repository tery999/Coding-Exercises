function adjacentElementsProduct(array) {

   let maxMult = array[0]*array[1];
   for ( let i = 1 ; i< array.length-1; i ++) {
        let curMax = array[i]*array[i+1];
        if (curMax > maxMult) {
            maxMult = curMax;
        }
   }

   return maxMult;
  }

  console.log( adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));