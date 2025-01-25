function goodVsEvil(good, evil){
    let goodArr = good.split(" ");
    let evilArr = evil.split(" ");
    let goodN = 0;
    let evilN = 0;

    //good worth
    let goodWorth = [1,2,3,3,4,10];
    //bad worth
    let evilWorth = [1,2,2,2,3,5,10];


    goodArr.forEach((element,i) => {
        goodN += Number(element) * goodWorth[i];
    });
    evilArr.forEach((element,i) => {
        evilN += Number(element) * evilWorth[i];
    });

    if ( goodN > evilN) {
        return "Battle Result: Good triumphs over Evil";
    }
    if ( goodN < evilN) {
        return "Battle Result: Evil eradicates all trace of Good";
    }
    return "Battle Result: No victor on this battle field";
}

console.log( goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))