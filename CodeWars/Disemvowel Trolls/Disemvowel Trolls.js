function disemvowel(str) {
    let strArr = str.split("");

    for ( let i = 0; i < strArr.length; i ++) {
        if(checkForVowels(strArr[i])) {
            strArr[i] = "";
        }
    }

    return strArr.join("");
    

    function checkForVowels(char) {
        let chatLowercase = char.toLowerCase();
        if (chatLowercase === "a" ||
            chatLowercase === "o" ||
            chatLowercase === "u" ||
            chatLowercase === "e" ||
            chatLowercase === "i"
        ) {
            return true
        } else {
            return false;
        }
    }
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));