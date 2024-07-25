function isValidWalk(walk) {
    let north = walk.filter( el => el==="n");
    let south = walk.filter( el => el==="s");
    let east = walk.filter( el => el==="e");
    let west = walk.filter( el => el==="w");

    let totalMinutes = north.length + south.length + east.length +west.length;
    let northSouth = north.length-south.length;
    let eastWest = east.length-west.length;

    if ( totalMinutes === 10 && northSouth === 0 && eastWest === 0
    ) {
        return true;
    } else {
        return false;
    }

  }

  console.log( isValidWalk(['n','s','n','s','n','s','n','s','n','s']))