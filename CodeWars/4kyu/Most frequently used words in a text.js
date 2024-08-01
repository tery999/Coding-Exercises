function topThreeWords(text) {
    let matches = text.match(/\'?[a-zA-Z]+\'?[a-zA-Z]*\'?/gm);

    if ( matches ) {
        matches = matches.map( (el)=> el.toLowerCase());
    } else {
        return [];
    }

    let wordsCount = {};
    matches.forEach(element => {
        if( wordsCount[element]) {
            wordsCount[element] += 1;
        } else {
            wordsCount[element] = 1;
        }
    });

    let wordsArr = Object.entries(wordsCount);
    wordsArr.sort( (a,b) => b[1]-a[1]);
    
    let words = [];
    for ( let i = 0 ; i < wordsArr.length ; i ++) {
        words.push(wordsArr[i][0]);


        if ( i === 2) {
            break;
        }
    }

    return words;
}

console.log( topThreeWords("a a a  b  c c  d d d d  e e e e e"))