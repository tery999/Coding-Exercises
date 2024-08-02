function fleschKincaid(text){
   let NWords = text.split(" ");
   let syllables = ["a", "e", "o", "u" , "i"];

   let NSyllables = NWords.reduce( (acc, el) => {
    let syls = 0;
    for ( let i = 0 ; i < el.length; i ++) {
        if (syllables.includes( el.charAt(i)) && syllables.includes(el.charAt(i-1)) === false) {
            syls++;
        }
    }
    return acc + syls;
   }, 0)

   let averageSylInWord =NSyllables/ NWords.length;

   let result = (0.39*NWords.length) + (11.8*averageSylInWord) - 15.59;
   return result;
  }

  console.log( fleschKincaid("A good book is hard to find."));