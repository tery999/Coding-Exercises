function cakes(recipe, available) {
    let recipeKey = Object.keys(recipe);
    let filteredAvailableEntries = Object.entries(available);
    let filteredAvailable = available;
    for (let i = 0; i < filteredAvailableEntries.length; i++) {
        if (recipeKey.includes(filteredAvailableEntries[i][0]) === false) {
            delete filteredAvailable[filteredAvailableEntries[i][0]];
        }
    }
    if ( recipeKey.length !== Object.keys(filteredAvailable).length) {
        return 0;
    }

    let numberOfCakes = 0;
    let resourcesLeft = true;
    while (resourcesLeft) {
        Object.keys(filteredAvailable).forEach((el) => {
            filteredAvailable[el] -= recipe[el];
            if (filteredAvailable[el] < 0) {
                resourcesLeft = false;
            }
        })

        if (resourcesLeft) {
            numberOfCakes++;
        }
    }

    return numberOfCakes;
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));