function findKey(nums){
    let sortedArr = nums.sort( (a,b)=> b-a)
    let finalKey = "";
    sortedArr.forEach((element, ind) => {
       finalKey += element.charAt(ind)
    });
    

    return finalKey;
  }

  console.log( findKey( [7347289,3647289,3357289,3344289,3347389,3347229,3347281])) 

  // never mind, I have no idea what determines the correct key. 