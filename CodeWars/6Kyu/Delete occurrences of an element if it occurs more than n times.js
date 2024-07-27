function deleteNth(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        let numberCount = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                numberCount++;
                if (numberCount > n) {
                    arr.splice(j, 1)
                    j--;
                }
            }
        }
    }

    return arr;
}

console.log(deleteNth([12,39,19,39,39,19,12], 1));