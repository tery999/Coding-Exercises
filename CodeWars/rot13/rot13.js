function rot13(message) {
    // A to Z = 65 to 90
    // a to z = 97 = 122
    // 33 to 64; 91 - 96 ; 123-127 = special stuff and numbers
    let stringToConvert = message

    let decrypted = "";

    for (let letter of stringToConvert) {
        let a = letter.charCodeAt(0);
        if (letter === " ") {
            decrypted += " ";
        } else if ( a>= 33 && a<= 64 || a>=91 && a<= 96 || a>=123 && a<=127 || a == 10) {
            decrypted += String.fromCharCode(a);
        }
        else if (a >= 65 && a <= 90) {
            let totalPoints = a + 13;
            let b = "";
            if (totalPoints > 90) {
                let overShoot = totalPoints - 91;
                b = String.fromCharCode(65 + overShoot);

            } else {
                b = String.fromCharCode(totalPoints);
            }
            decrypted += b;
        } else if (a >= 97 && a <= 122) {
            let totalPoints = a + 13;
            let b = "";
            if (totalPoints > 122) {
                let overShoot = totalPoints - 123;
                b = String.fromCharCode(97 + overShoot);

            } else {
                b = String.fromCharCode(totalPoints);
            }
            decrypted += b;
        }
    }

    return decrypted;

}

console.log(rot13(`k
c:cN{S`));