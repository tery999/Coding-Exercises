function tribonacci(signature, n) {
    let arr = [];
    arr = arr.concat(signature);

    let i = 2;
    while (arr.length < n) {
        let comb = arr[i - 2] + arr[i - 1] + arr[i];
        arr.push(comb);
        i++;
    }


    return arr.slice(0,n);
}

console.log(tribonacci([1, 1, 1], 10))