function toUnderscore(string) {
    let startingString = string;
    if ( typeof string === "number" ) {
        startingString = string.toString();
    }
    let matches = startingString.match(/([A-Z][a-z]*\d*[a-z]*)/gm);
    if (matches === null) {
        return startingString;
    }
    let snakeCase = [];

    matches.forEach(element => {
        let lowerCased = element.slice(0,1).toLowerCase() + element.slice(1);
        snakeCase.push(lowerCased)
    });

    return snakeCase.join("_");
  }

  console.log( toUnderscore(566) );