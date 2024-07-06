function XO(str) {
    let Xs = 0;
    let Os = 0;

    for ( let letter of str) {
        if (letter.toLowerCase() === "x") {
            Xs ++;
        } else if (letter.toLowerCase() === "o" ) {
            Os ++;
        }
    }

    if (Xs === Os ) {
        return true;
    } else {
        return false;
    }
}