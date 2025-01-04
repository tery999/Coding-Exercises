function distancesFromAverage(arr){
    let sum = 0;
    arr.forEach( (x) => sum+= x)
    let average = sum / arr.length;
 
    let distance = arr.map ( (el) => parseFloat((average - el).toFixed(2)) );
    return distance;
   }

  console.log(distancesFromAverage([55, 95, 62, 36, 48]));