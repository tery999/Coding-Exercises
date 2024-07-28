function chineseZodiac(year){
   let animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
   let elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

   let knownStartingYear = 1924;
   let currentYear = year - knownStartingYear;

   let animal = animals[currentYear%12];
    
   let currentElement = "Wood";
    let currentElementCycle = 0;
    while (knownStartingYear <= year) {
        currentElement = elements[currentElementCycle]
        knownStartingYear += 2;
        currentElementCycle++;
        if (currentElementCycle > 4) {
            currentElementCycle = 0;
        }
    }

   return currentElement+" "+animal;
  }

  console.log(chineseZodiac(1996));