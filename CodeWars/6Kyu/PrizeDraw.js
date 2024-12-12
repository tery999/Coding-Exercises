function rank(st, we, n) {

    let namePrice = {};
    let names = st.split(",");

    if (names.length === 0 || st.length === 0) {
        return  "No participants";
    }

    if ( n > names.length) {
       return "Not enough participants";
    }

    names.forEach((el,i) => {
        namePrice[el] = findTotalPoints(el, we[i]) ;
    });

    let namePriceArr = Object.entries(namePrice);
    let namePriceSorted = namePriceArr.sort( (a,b) => {
        if ( a[1] > b[1]) {
            return -1
        } else if ( a[1] < b[1]) {
            return 1;
        } else {
            if (a[0] > b[0]) {
                return 1;
            } else {
                return -1;
            }
        }
    })
    return namePriceSorted[n-1][0];

    function findTotalPoints(name, weight) {
        let totalPointsCur = 0;
        let lowerCaseName = name.toLowerCase();
        for ( let i = 0 ; i < name.length; i++) {
            totalPointsCur+= lowerCaseName.charCodeAt(i) - 96;
        }
        return (totalPointsCur + name.length)* weight;
    }
}

console.log ( rank ("", [4, 2, 1, 4, 3, 1, 2], 6));