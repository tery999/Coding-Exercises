function squareSum(numbers){
    let squared = numbers.reduce( (first, second)=> first+(second*second),0);

    return squared;
}

console.log( squareSum([2, 2, 2]))