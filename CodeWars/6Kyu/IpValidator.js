function isValidIP(str) {
    let splitIp = str.split(".");
    let isValid = true;

    if (splitIp.length > 4 || splitIp.length < 3) {
        return false;
    }
   
    if ( isValid) {
        splitIp.forEach(element => {
            if ( element.length > 1 && element.charAt(0) === 0) {
                isValid = false;
            }
            if ( Number(element) < 0 || Number(element) > 255) {
                isValid = false;
            }
        });
    }

    return isValid;

  }

  console.log( isValidIP("12.256.566.1"))