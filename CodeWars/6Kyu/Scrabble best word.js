function getBestWord(points,words){
    let smallestLength = words[0].length;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    words.forEach(element => {
        if ( element.length < smallestLength) {
            smallestLength = element.length;
        }
    });

    let filteredWords = words.filter( (el) => el.length === smallestLength);

    let biggest = 0;
    let biggestWord = "";
    for ( let i = 0 ; i < filteredWords.length; i ++) {
        let curScore = 0;
        for ( let j = 0 ; j < filteredWords[i].length; j ++ ) {
            let curIndex = letters.indexOf(filteredWords[i][j]);
            curScore += points[curIndex];
        }
        if ( curScore > biggest) {
            biggest = curScore;
            biggestWord = filteredWords[i];
            curScore = 0;
        }

    }

    return words.indexOf(biggestWord) ;
  }

  console.log( getBestWord( [1,3,3,2,1,4,2,4,1,8,10,1,2,1,1,3,8,1,1,1,1,4,10,10,10,10] , ["WHO","IS","THE","BEST","OF","US"]));