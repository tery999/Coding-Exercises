function solution(string) {
    let wordsArr = [];

   for ( let i = 0 ; i<string.length ; i++ ) {
    if ( string[i] === string[i].toUpperCase()) {
        let word = string.slice(0,i)
        string = string.slice(i);
        i = 0;
        wordsArr.push(word)
    }
   }
   wordsArr.push(string);

    return wordsArr.join(" ");
  }

  console.log( solution("camelCasingSome"))