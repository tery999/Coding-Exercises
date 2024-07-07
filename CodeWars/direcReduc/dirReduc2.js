function dirReduc(arr){
    for ( let i = arr.length-1; i>0 ; i-- ){

        if( arr[i] === "WEST" && arr[i-1] === "EAST" ||
            arr[i] === "EAST" && arr[i-1] === "WEST"
        ) {
            arr.splice(i-1,2)
        }

        if( arr[i] === "NORTH" && arr[i-1] === "SOUTH" ||
            arr[i] === "SOUTH" && arr[i-1] === "NORTH"
        ) {
            arr.splice(i-1,2)
        }
    }

    return arr;
}

console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]) );