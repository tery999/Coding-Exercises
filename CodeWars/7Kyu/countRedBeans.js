function countRedBeads(n) {
    // B RR B RR B RR B
    if (n < 2) {
        return 0;
    }

    let redBeads = 0;
    for ( let i = 1 ; i < n ; i ++) {
        redBeads += 2;
    }
    return redBeads;
    
  }

  console.log( countRedBeads(3))