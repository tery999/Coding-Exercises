function dirReduc(arr) {
    let north = 0;
    let south = 0;
    let west = 0;
    let east = 0;

    arr.forEach(element => {
        if (element === "NORTH") {
            north++;
        }
        if (element === "SOUTH") {
            south++;
        }
        if (element === "WEST") {
            west++;
        }
        if (element === "EAST") {
            east++;
        }
    });

    let NorthSouth = north - south;
    let difference = Math.min(north, south)

    let checkNorth = 0;
    let checkSouth = 0;
    arr = arr.filter((el) => {
        if (NorthSouth === 0) {
            if (el === "NORTH" || el === "SOUTH") {
                return false;
            }
        }
        if (NorthSouth >= 1 && difference > checkNorth) {
            if (el === "NORTH") {
                checkNorth++;
                return false;
            }
        }

        if (NorthSouth >= 1 && el === "SOUTH") {
            return false;
        }

        else if (NorthSouth <= -1 && difference > checkSouth) {
            if (el === "SOUTH") {
                checkSouth++;
                return false;
            }
        } if (NorthSouth <= -1 && el === "NORTH") {
            return false;
        }

        return true;
    })
    

    let EastWest = east - west;
    let difference2 = Math.min(east, west)

    let checkEast = 0;
    let checkWest = 0;
    arr = arr.filter((el) => {
        if (EastWest === 0) {
            if (el === "EAST" || el === "WEST") {
                return false;
            }
        }
        if (EastWest >= 1 && difference2 > checkEast) {
            if (el === "EAST") {
                checkEast++;
                return false;
            }
        }

        if (EastWest >= 1 && el === "WEST") {
            return false;
        }

        else if (EastWest <= -1 && difference2 > checkWest) {
            if (el === "WEST") {
                checkWest++;
                return false;
            }
        } if (EastWest <= -1 && el === "EAST") {
            return false;
        }

        return true;
    })
    
    return arr;


}

console.log(dirReduc(["NORTH", "NORTH", "SOUTH", "SOUTH", "WEST", "WEST" , "EAST","EAST"]));