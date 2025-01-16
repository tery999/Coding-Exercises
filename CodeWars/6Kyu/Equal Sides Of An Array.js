function findEvenIndex(arr){
    let firstHalf = [];
    let secondHalf = [];
 for ( let i = 0 ; i < arr.length; i ++) {
    firstHalf = arr.slice(0,i);
    secondHalf = arr.slice(i+1);
    let firstHalfTotal = firstHalf.reduce( (first, second) => first + second, 0 );
    let secondHalfTotal = secondHalf.reduce( (first, second) => first + second,0 );
    
    if ( firstHalfTotal === secondHalfTotal) {
        return i;
    }
 }
 

 return -1;
}

console.log( findEvenIndex([20,10,-80,10,10,15,35]))
