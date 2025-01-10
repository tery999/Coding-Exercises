//return the total number of smiling faces in the array
function countSmileys(arr) {
    let validEyes = [ ":", ";"];
    let validNoses = ["-","~"];
    let validSmile = [")", "D"];

    let NSmiles = 0;

    arr.forEach(element => {
        if (validEyes.includes( element.charAt(0) ) ) {
            if ( validSmile.includes ( element.charAt(element.length-1))) {
                if ( element.length === 2) {
                    NSmiles++;
                } else if ( validNoses.includes( element.charAt(1)) && element.length === 3){
                    NSmiles++;
                }
            }
        }
    });

    return NSmiles;
  }

  console.log ( countSmileys([':D',':~)',';~D',':)']))