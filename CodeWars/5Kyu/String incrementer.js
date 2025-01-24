function incrementString (strng) {
    let numbersAsString = "";
    let onlyString = "";
    let onlyFinalNumbers = false;

    for ( let i = strng.length-1 ; i >= 0; i --) {
        if ( !Number.isNaN( Number(strng[i])) && onlyFinalNumbers === false) {
            numbersAsString += strng[i];
        } else {
            onlyString += strng[i];
            onlyFinalNumbers = true;
        }
    }

    let numbersLength = numbersAsString.length;
    numbersAsString = numbersAsString.split("").reverse().join("");
    numbersAsString = Number ( numbersAsString) + 1;

    return onlyString.split("").reverse().join("") + String(numbersAsString).padStart(numbersLength, "0");;
  }

  console.log ( incrementString( "foo4bar123"));