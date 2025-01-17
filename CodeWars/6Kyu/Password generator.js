function passwordGen() {
    //     6 - 20 characters long
    // contains at least one lowercase letter
    // contains at least one uppercase letter
    // contains at least one number
    // contains only alphanumeric characters (no special characters)
    let password = "";
    let lowerCaseAscii = [97,122];
    let uppwerCaseAscii = [65, 90];
    let NCharacters = Math.floor(Math.random() * 15) + 6;

    for (let i = 0; i < NCharacters; i++) {
        let randomCharacterSmall = Math.floor ( Math.random() * (lowerCaseAscii[1] + 1 - lowerCaseAscii[0]) + lowerCaseAscii[0] );
        let randomCharacterUpp = Math.floor ( Math.random() * (uppwerCaseAscii[1] + 1 - uppwerCaseAscii[0]) + uppwerCaseAscii[0] );
        let UppOrDown = Math.floor(Math.random() * 3) + 1;

        if ( UppOrDown === 1 ) {
            password += String.fromCharCode(randomCharacterSmall);
        } else if (UppOrDown === 2){
            password += String.fromCharCode(randomCharacterUpp);
        } else if ( UppOrDown === 3) {
            let randomNumb = Math.floor(Math.random() * 9) + 1;
            password += randomNumb.toString();
        }
    }

    return password;

}

console.log( passwordGen())