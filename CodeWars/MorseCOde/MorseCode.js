decodeMorse = function(morseCode){
    const MORSE_CODE = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '...---...': "SOS",
        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
      }

      let startingCode = morseCode.trim();
      startingCode = startingCode.split("   ");
      
      let decodedCode = "";
      for ( let i = 0 ; i < startingCode.length ; i++) {
        let splitWords = startingCode[i].split(" ");
        for ( let j = 0; j < splitWords.length ; j++) {
            decodedCode += MORSE_CODE[splitWords[j]]
        }
        decodedCode += " ";
      }

      return decodedCode.trim();
  }

  console.log(decodeMorse('...---...'))