var uniqueInOrder=function(iterable){
    let arr = "";
    let uniqueArr = [];

    if (typeof iterable === "string") {
        arr = iterable.split("");
    } else {
        arr = iterable;
    }

    arr.forEach((element,i,next) => {
        if (element !== next[i+1]) {
            uniqueArr.push(element)
        }
    });

    return uniqueArr;
  }

 console.log( uniqueInOrder("123444") )