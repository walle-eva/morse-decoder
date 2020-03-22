const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const WORD_LENGTH = 10;
  const MORSE_LENGTH = 2;
  const MORSE = {
    '10':  '.',
    '11':  '-',
    '**':  ' ',
    '00':   ''
  };

  const parseString = function(inputStr, step) {
    let result = [];
    let index = 0
    while (index < inputStr.length) {
      result.push(inputStr.slice(index, index += step));
    }
    return result;
  }
  
  const morseCode = parseString(expr, WORD_LENGTH). 
    map(
      function(item) {
        return parseString(item, MORSE_LENGTH). 
          map(
            function(item) {
              return MORSE[item];
            }
          ).join('');
      }
    );

  return morseCode. 
    map( 
      function(item) {
        if (item === '     ') return ' '; 
        return MORSE_TABLE[item];
      }
    ).join('');
}

module.exports = {
    decode
}
