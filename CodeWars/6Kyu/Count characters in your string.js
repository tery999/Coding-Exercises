function count(string) {
    let obj = {};

    for ( let i = 0 ; i < string.length ; i++) {
        let curKey = string.charAt(i);

        if ( obj.hasOwnProperty(curKey) === false) {
            obj[curKey] = 1;
        } else {
            obj[curKey] += 1;
        }
    }

    return obj;
  }


  console.log( count ( "ABA"));