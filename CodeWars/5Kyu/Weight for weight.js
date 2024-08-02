function orderWeight(strng) {
    let numberArr = strng.split(" ");
    numberArr.sort( (a,b) => {
        let firstTotal = 0;
        let secondTotal = 0;
        let higherLength = Math.max(a.length, b.length);

        for ( let i = 0; i < higherLength ; i ++) {
            firstTotal+= Number( a.charAt(i) );
            secondTotal+= Number( b.charAt(i) );
        }

        if ( firstTotal-secondTotal === 0) {
            let aString = a.toString();
            let bString = b.toString();
            return aString.localeCompare(bString);
        }

        return firstTotal-secondTotal;
    });

    return numberArr.join(" ");
};

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))