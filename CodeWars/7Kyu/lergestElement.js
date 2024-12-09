function largest(n, array) {

    if ( n === 0 ) {
        return [];
    }
    let sorted = array.sort( (a,b) => a-b)
    let sortedNindex = sorted.slice( -n)
    return sortedNindex;
  }

  console.log( largest ( 2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));