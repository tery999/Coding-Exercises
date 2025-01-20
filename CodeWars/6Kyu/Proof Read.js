function proofread(str) {

    let words = str.split(" ");
    let isFirstWord = true;
    for (let i = 0; i < words.length; i++) {
        let wordToReplace = words[i].toLowerCase();
        if (wordToReplace.includes("ie")) {
            wordToReplace = wordToReplace.replace("ie", "ei");
        }

        if ( isFirstWord === true) {
            wordToReplace = wordToReplace.charAt(0).toUpperCase() + wordToReplace.slice(1);
            isFirstWord = false;
        }

        if ( words[i].includes(".")) {
            isFirstWord = true;
        }
        words[i] = wordToReplace;


    }
    return words.join(" ")

}

console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."))