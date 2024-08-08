function duplicateCount(text){
    let textAsArr = text.split("");
    let duplicateCount = 0;

    textAsArr.forEach(element => {
        let numberOfOcc = textAsArr.filter( (el)=> el.toLowerCase()===element.toLowerCase());
        if ( numberOfOcc.length >= 2) {
            duplicateCount ++;
        }

        textAsArr = textAsArr.filter( (el)=> el.toLowerCase()!== element.toLowerCase());
    });

    return duplicateCount;
  }

  console.log( duplicateCount("aabbcde"))