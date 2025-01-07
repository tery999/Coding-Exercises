function towerBuilder(nFloors) {
    let pyramid = ["*"];
    let nStars = 1;
   
    for ( let i = 1 ; i < nFloors ; i++) {
        nStars += 2;
        let currentStars = "";
        for ( let j = 0; j < nStars; j++ ) {
            currentStars += "*"
        }
        pyramid.push( currentStars);
    }

    return pyramid;
  }

  console.log( towerBuilder(2))