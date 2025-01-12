function score(dice) {
      let score = 0;

      let ones = 0;
      let twos = 0;
      let threes = 0;
      let fours = 0;
      let fives = 0;
      let sixes = 0;

      dice.forEach(element => {
            if (element === 1) {
                  ones++;
            } else if (element === 2) {
                  twos++;
            } else if (element === 3) {
                  threes++;
            }else if (element === 4) {
                  fours++;
            }else if (element === 5) {
                  fives++;
            }else if (element === 6) {
                  sixes++;
            }
      });

     
}
// NOT DONE


console.log(score([2, 3, 4, 6, 2]));