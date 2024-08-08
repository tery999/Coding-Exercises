function alphabetPosition(text) {
    let positionArr = [];
    let textAsArr = text.split("");

    textAsArr.forEach(element => {
        if ( element.toLowerCase().charCodeAt() >= 97 && element.toLowerCase().charCodeAt() <= 122 ) {
            let value = element.toLowerCase().charCodeAt() - 96;
            positionArr.push(value);
        }
    });
    return positionArr.join(" ");
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));