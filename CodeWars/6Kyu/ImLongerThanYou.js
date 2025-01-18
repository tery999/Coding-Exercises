function longer(s) {
    let words = s.split(" ");
    words.sort( (a,b) => {
        if ( a.length > b.length ) {
            return 1;
        } else if ( a.length < b.length ) {
            return -1;
        } else {
            return a.localeCompare(b)
        }
    })

   
    return words.join(" ");

  }

  console.log ( longer("Darkness on the edge of Town"));