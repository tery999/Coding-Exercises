function findShort(s){
    let allWords = s.split(" ");
    let shortestLength = allWords[0].length;

    allWords.forEach( (el)=> {
        if ( el.length < shortestLength ) {
            shortestLength = el.length;
        }
    })

    return shortestLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps") )