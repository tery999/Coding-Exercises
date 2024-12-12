function merge(line) {
    let filteredArr = line.filter( (el) => el !== 0);
    let mergedArr = [];

    let islast = false;
    for ( let i = 0 ; i < filteredArr.length; i++) {
        if ( i === filteredArr.length - 1 && i === 2) {
            islast = true;
        }
       for ( let j = i+1; j < filteredArr.length; j++) {
        if ( filteredArr[i] === filteredArr[j]) {
            mergedArr.push( filteredArr[i]*2);
            i++;
            break;
        }
       }

       if ( islast) {
        mergedArr.push( filteredArr[filteredArr.length-1])
       }


    }

    let difference = 4 - mergedArr.length;
    while ( mergedArr.length < 4) {
        mergedArr.push(0);
    }


    return mergedArr;

  
  };

  console.log ( merge([8,8,16,0]) )
  // 2, 2, 2
  // 