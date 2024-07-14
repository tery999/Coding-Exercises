function pigIt(str){
  let arr = str.split(" ");
  let latinArr = [];

  arr.forEach(element => {
    let word = "";
    if (element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90 || 
    element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122 ) {
      word = element.slice(1) + element.slice(0,1)  + "ay";
    } else {
      word = element;
    }

    latinArr.push(word);
  });

  return latinArr.join(" ");
}

console.log(pigIt('Pig latin is cool !'));