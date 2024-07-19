function nbYear(p0, percent, aug, p) {
    let totalPop = p0;
    let yearsPassed = 0;

    while ( totalPop <= p) {
        currentNew= (totalPop*(percent/100)) + aug;
        totalPop += Math.floor(currentNew);
        yearsPassed ++;
    }

    return yearsPassed;
}

console.log(nbYear(1500, 5, 100, 5000))