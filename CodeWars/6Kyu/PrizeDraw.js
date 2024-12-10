function rank(st, we, n) {
    let namePrice = {};
    let names = st.split(",");

    names.forEach((el,i) => {
        namePrice[el] = findTotalPoints(el, we[i]) ;
    });
    return namePrice;


    function findTotalPoints(name, weight) {
        let totalPointsCur = 0;
        let lowerCaseName = name.toLowerCase();
        for ( let i = 0 ; i < name.length; i++) {
            totalPointsCur+= lowerCaseName.charCodeAt(i) - 96;
        }
        return (totalPointsCur + name.length)* weight;
    }
}

console.log ( rank ( "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4));