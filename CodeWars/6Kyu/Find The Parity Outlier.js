function findOutlier(integers){
    let filteredEvens = integers.filter( (el)=> el%2===0);
    let filteredOdds = integers.filter( (el)=> el%2!==0);

    if ( filteredEvens.length === 1 ) {
        return filteredEvens[0];
    } else {
        return filteredOdds[0];
    }
  }

  console.log( findOutlier([1, 2, 3]));