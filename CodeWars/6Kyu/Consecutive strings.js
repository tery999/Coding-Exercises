function longestConsec(strarr, k) {
    let finalLargest = "";
    let maxLoop = strarr.length - k;
   for ( let i = 0 ; i < maxLoop ; i++) {
    let curLargest = "";
        for ( let j = i; j < i+k ; j++) {
                curLargest+= strarr[j];
        }
        if ( curLargest.length > finalLargest.length) {
            finalLargest = curLargest;
        }
        curLargest = "";
   }

   return finalLargest;
}


console.log ( longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));