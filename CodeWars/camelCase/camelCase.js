function toCamelCase(str){
    let converted = "";
    converted = str.split(/[_|-]/gm);

    converted = converted.map( (el,i) => {
        if ( i >= 1) {
            return el = el.charAt(0).toUpperCase() + el.slice(1);
        }
        return el;
    })

    return converted.join("");
}

console.log(toCamelCase("The_stealth-Warrior"));