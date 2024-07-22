class Warrior {
    #level
    #rank
    #experience
    #achievements
    constructor() {
        this.#level = 1;
        this.#rank = "Pushover";
        this.#experience = 100;
        this.#achievements = [];
    }


    level() {
        return this.#level;
    }

    rank() {
        return this.#rank;
    }

    experience() {
        return this.#experience;
    }

    achievements() {
        return this.#achievements;
    }

    training(arr) {
        let mastery = arr[0];
        let experienceEarned = arr[1];
        let minimumLevel = arr[2];

        if (this.#level >= minimumLevel) {
            this.#achievements.push(mastery);
            this.#checkExperience(experienceEarned)

            return mastery;
        } else {
            return "Not strong enough"
        }

    }

    battle(enemyLvl) {
        if (enemyLvl < 1 || enemyLvl > 100) {
            return "Invalid level";
        }

        if (this.#level - enemyLvl === 0) {
            this.#checkExperience(10);
            return "A good fight";
        }

        if (this.#level - enemyLvl > 0) {
            if (this.#level - enemyLvl === 1) {
                this.#checkExperience(5);
                return "A good fight";
            } else {
                return "Easy fight";
            }
        } else if (this.#level - enemyLvl < 0) {
            let difference = enemyLvl - this.#level;
            let rankDifference = Math.floor(enemyLvl / 10) - Math.floor(this.#level / 10);

            if (difference >= 5 && rankDifference >= 1) {
                return "You've been defeated";
            }


            let experienceGained = 20 * difference * difference;
            this.#checkExperience(experienceGained);

            return "An intense fight";
        }

    }

    //ranks
    //"Pushover", "Novice", "Fighter", "Warrior", "Veteran", 
    //"Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest".

    #checkExperience(expToAdd) {
        if (this.#experience < 10000) {


            let totalExperience = this.#experience + expToAdd;
            if (totalExperience >= 10000) {
                this.#experience = 10000;
                return;
            }
            this.#experience += expToAdd;
            let newLevel = Math.floor(totalExperience / 100);
            if (newLevel >= 100) {
                this.#level = 100;
            } else {
                if (newLevel < 10) {
                    this.#rank = "Pushover"
                } else if (newLevel >= 10 && newLevel < 20) {
                    this.#rank = "Novice"
                } else if (newLevel >= 20 && newLevel < 30) {
                    this.#rank = "Fighter"
                } else if (newLevel >= 30 && newLevel < 40) {
                    this.#rank = "Warrior"
                } else if (newLevel >= 40 && newLevel < 50) {
                    this.#rank = "Veteran"
                } else if (newLevel >= 50 && newLevel < 60) {
                    this.#rank = "Sage"
                } else if (newLevel >= 60 && newLevel < 70) {
                    this.#rank = "Elite"
                } else if (newLevel >= 70 && newLevel < 80) {
                    this.#rank = "Conqueror"
                } else if (newLevel >= 80 && newLevel < 90) {
                    this.#rank = "Champion"
                } else if (newLevel >= 90 && newLevel < 99) {
                    this.#rank = "Master"
                } else {
                    this.#rank = "Greatest"
                }
                this.#level = newLevel;
            }

        }
    }
}

let Ivan = new Warrior()
console.log(Ivan.level())
console.log(Ivan.training(["Do ten push-ups", 95, 1]));
console.log(Ivan.experience())
console.log(Ivan.level())
console.log(Ivan.battle(1))
console.log(Ivan.battle(3))
console.log(Ivan.training(["Survive one night at the Forest of Death", 170, 2]))
console.log(Ivan.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(Ivan.battle(2))
console.log(Ivan.battle(9))
console.log(Ivan.battle(14))
Ivan.battle(12);
Ivan.battle(8);
Ivan.training(["Mastered the Spirit Bomb", 1580, 10])
console.log(Ivan.battle(30))
console.log(Ivan.experience())
Ivan.training(["Mastered the Shadow Clone Jutsu", 19, 6]);
console.log(Ivan.experience());
console.log(Ivan.level());
console.log(Ivan.battle(32))
console.log(Ivan.battle(39))
console.log(Ivan.rank())
console.log(Ivan.training(["Mastered the Spirit Gun", 1340, 43]))
console.log(Ivan.battle(61));
console.log(Ivan.training(["Mastered the Perfect Roundhouse Kick", 1781, 60]))
console.log(Ivan.rank())
console.log(Ivan.experience())