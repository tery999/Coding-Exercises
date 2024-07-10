function generateHashtag (str) {
    if (str.trim().length === 0) {
        return false;
    }
    //trying with regex
    let arrSplit = str.replace(/(^\w|\s\w)/g, match => match.toUpperCase());
    arrSplit = arrSplit.split(/ +/gm);
     arrSplit.unshift("#")
     let hashtaggedStr = arrSplit.join("");

     if ( hashtaggedStr.length > 140) {
        return false;
     }
    return hashtaggedStr;

}

console.log( generateHashtag(""))