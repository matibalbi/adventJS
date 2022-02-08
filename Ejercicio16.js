function decodeNumber(symbols) {
    var number = 0
    for (var i = 0; i < symbols.length; i++) {
        if (!dicc.hasOwnProperty(symbols[i])) return NaN
        if (dicc[symbols[i]] < dicc[symbols[i + 1]]) {
            number -= dicc[symbols[i]]
        } else number += dicc[symbols[i]]
    }
    return number
}

var dicc = {".": 1, ",": 5, ":": 10, ";": 50, "!": 100}

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100

console.log(decodeNumber('...')) // 3
console.log(decodeNumber('.,')) // 4 (5 - 1)
console.log(decodeNumber(',.')) // 6 (5 + 1)
console.log(decodeNumber(',...')) // 8 (5 + 3)
console.log(decodeNumber('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumber('.;')) // 49 (50 - 1)
console.log(decodeNumber('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumber('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumber('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumber('!!!')) // 300
console.log(decodeNumber(';!')) // 50
console.log(decodeNumber(';.W')) // NaN