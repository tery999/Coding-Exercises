function isHappy(n, pow) {
    let loopArr = [n];
    let finalNumber = n;
    let curNumString = n.toString();
    let curNumber = 0;
        while ( true ) {
            for ( let i = 0 ; i < curNumString.length; i ++) {
                curNumber += Math.pow( Number ( curNumString[i]) , pow);
            }

            if ( curNumber == 1) {
                return [1];
            }

            curNumString = curNumber.toString();
            if (loopArr.includes(curNumber)) {
                let indexToRemove = loopArr.indexOf(curNumber);
                loopArr.push(curNumber);
                loopArr = loopArr.slice(indexToRemove)
                break;
            }

            loopArr.push(curNumber)

            curNumber = 0;
        }

        return loopArr;
}

console.log ( isHappy(43320, 3));