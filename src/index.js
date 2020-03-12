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
    let result = txt => {
        let d = ''
        for(let i = 0; i < txt.length; i = i + 2) {
            txt[i] + txt[i + 1] === '11' ? d = d + '-' : d = d + '.'
        }
        return d
    }
    let arr = []
    for(let i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.slice(i, i + 10))
    }
    return  arr.map(u => {
        if (u[0] === '*') return ' '
        for(let i = 0; i < u.length; i = i + 2) {
            if (u[i] === '1') return MORSE_TABLE[result(u.slice(i, 10))]
        }
    }).join('')
}
console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))

module.exports = {
    decode
}