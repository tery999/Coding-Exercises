function spinWords(string){
    let strAsArr = string.split(" ");

    let reversedArr = strAsArr.map( (el)=> {
        if ( el.length >= 5) {
            let reversed = el.split("").reverse();
            return reversed.join("");
           
        }
        return el;
    })

    return reversedArr.join(" ");
  }

  console.log ( spinWords("Hey fellow warriors"))