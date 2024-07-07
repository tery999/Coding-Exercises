function sortArray(array) {
   let oddArr = [];

   array.forEach(element => {
        if (element%2!==0) {
            oddArr.push(element);
        }
   });
   oddArr.sort( (a,b) => a-b)

   array.forEach( (elem,index) => {
    if (elem%2!==0) {
        array[index] = oddArr.shift()
    }
   })

    return array;
  }

  console.log( sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))