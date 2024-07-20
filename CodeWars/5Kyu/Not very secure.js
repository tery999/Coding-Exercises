function alphanumeric(string){
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


    if ( string.trim().length === 0) {
        return false;
    }

    let isItEmpty = string.replace(/[a-zA-Z]|[0-9]/gm, "");

    if ( isItEmpty.length === 0 ) {
        return true;
    } else {
        return false;
    }
  }

  console.log(alphanumeric("Mazin  kais  erсад"));