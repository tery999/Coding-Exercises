function order(words){
    let wordsSplit = words.split(" ");
    let wordsArranged = [];
    let curNumber = 1;

    for ( let i = 0 ; i < wordsSplit.length; i ++) {

        for ( let j = 0; j < wordsSplit.length; j++) {
            if ( wordsSplit[j].includes(curNumber)) {
                wordsArranged.push( wordsSplit[j]);
                curNumber ++;
                break;
            }
        }


    }

    return wordsArranged.join(" ");

  }

  console.log( order("is2 Thi1s T4est 3a"));