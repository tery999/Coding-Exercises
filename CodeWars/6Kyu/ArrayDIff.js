function arrayDiff(a, b) {
    let startingArr = a;
    for ( let i = 0 ; i < b.length; i ++) {
        if ( startingArr.includes(b[i])) {
            startingArr = startingArr.filter( el => el!==b[i])
        }
    }

    return startingArr;
}

console.log(arrayDiff([1, 2, 2, 3], [1, 3]));