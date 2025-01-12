function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for ( let i = 0 ; i < alphabet.length; i++) {
        let curLetter = alphabet.charAt(i)
        if ( string.includes( curLetter ) || string.includes( curLetter.toUpperCase())) {
            continue;
        } else {
            return false;
        }
    }

    return true;

  }

  console.log( isPangram("The quick brwn jumps over the lazy dog."))