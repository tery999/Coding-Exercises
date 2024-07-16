function countSheeps(sheep) {
    let count = 0;

    sheep.forEach(element => {
        if ( element === true) {
            count++;
        }
    });

    return count
  }

  console.log( countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))