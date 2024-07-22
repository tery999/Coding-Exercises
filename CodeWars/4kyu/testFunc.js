let exp = 120;

function checkExperience(expToAdd) {
    let totalExperience = exp + expToAdd;
    let newLevel = Math.floor( totalExperience/100 );
    return newLevel;
}

console.log(checkExperience(350)) 