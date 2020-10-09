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
    var newArrOfExpr = expr.split(/(.{10})/).filter(O=>O);
    var newArrOfExprWithoutZero = newArrOfExpr.map(function (x){
        return x.replace(/00/g, "");
    });
    var newArrDots = newArrOfExprWithoutZero.map(function (y){
        return y.replace(/10/g, ".");
    });
    var newArrDashes = newArrDots.map(function (y){
        return y.replace(/11/g, "-");
    });
    var finalMorseArr = newArrDashes.map(function (y){
        return y.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
    });

    for (let i=0; i < finalMorseArr.length; i++){
        for (let key in MORSE_TABLE){
            if (finalMorseArr[i] === key){
                finalMorseArr[i] = MORSE_TABLE[key];
            }
        }
    }
    var wordsPhrase = finalMorseArr.join('') ;
    return wordsPhrase;
}


module.exports = {
    decode
}