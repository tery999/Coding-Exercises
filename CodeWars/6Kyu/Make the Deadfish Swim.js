function parse( data ){
    let curValue = 0;
    let printedValues = [];

    for ( let i = 0 ; i < data.length ; i++) {
        if ( data.charAt(i) === "i") {
            curValue ++;
        }
        if ( data.charAt(i) === "d") {
            curValue --;
        }
        if ( data.charAt(i) === "s") {
            curValue = Math.pow( curValue, 2);
        }
        if ( data.charAt(i) === "o") {
            printedValues.push(curValue);
        }
    }
  return printedValues;
}

console.log( parse("iiisxxxdoso") );