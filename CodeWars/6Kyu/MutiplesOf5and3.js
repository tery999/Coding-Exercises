function solution(number) {
    let arrNumbers = [];

    if (number <= 3) {
        return 0;
    }

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            arrNumbers.push(i);
        }

    }

    let total = arrNumbers.reduce((a, b) => a + b);
    return total;
}

console.log(solution(30))