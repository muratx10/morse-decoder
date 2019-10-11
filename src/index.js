const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  
  MORSE_TABLE[''] = ' ';
  
    let char_10 = /.{1,10}/g; //regexp to get all 10 paired characters
    let char_2 = /\d{1,2}/g; //regexp to get all 2 paired characters
    let whiteSpace = /\*{1,10}/g; //regexp to get * chars
    
    let letterArr = expr.match(char_10);
    let result = '';

    letterArr.forEach(element => {
      let symbolsArr = !whiteSpace.test(element) ?
        element.match(char_2) :
        ['whitespace'];
      
      const decodedSymbols = symbolsArr.map(item => {
        if (item === "10") return ".";
        if (item === "11") return "-";
        if (item === "whitespace") return '';
        if (item === '00') return '';
      });
      
      result += MORSE_TABLE[decodedSymbols.join('')]
    });
    return result;
  }
module.exports = {
  decode
}