// not working with all cases, cant find where my mystake is

function solve(arr, n) {

    let catsCaught = 0;
    let indexOfCoughtCat = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "D") {
            for (let j = i - n; j < arr.length && j <= i + 2; j++) {
                if ( !indexOfCoughtCat.includes(j)) {
                    if (arr[j] === "C") {
                        catsCaught++;
                        indexOfCoughtCat.push(j);
                        break;
                    }
                }
            }
        }
    }
    return catsCaught;
}

console.log(solve(['C','C','D','D','C','D'], 1))