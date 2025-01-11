function stockList(books, categories) {
   let stockObj = {};

   if ( books.length === 0 ) {
    return "";
   }
   categories.forEach(element => {
        stockObj[element] = 0;
   });

   books.forEach(element => {
    let numBooks = element.split(" ")[1];
    if (categories.includes( element.charAt(0) ))
    stockObj[element.charAt(0)] += Number(numBooks)
});

    let stocksAsArr = Object.entries(stockObj);
    let final = [];

    for ( const [key,value] of stocksAsArr ) {
        final.push(`(${key} : ${value})`)
    }
   

   return final.join(" - ")

}

console.log( stockList(   ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]))