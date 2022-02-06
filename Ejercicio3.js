function isValid(letter) {
    var inipar = false
    for (var i = 0; i < letter.length; i++) {
        if (letter[i] === "(") {
            if (letter[i + 1] === ")") return false
            inipar = true
            continue
        }
        if (inipar && (letter[i] === "[" || letter[i] === "{")) return false
        if (inipar && letter[i] === ")") inipar = false
    }
    if (inipar) return false
    return true
}

console.log(isValid("bici coche (balón) bici coche peluche")) // -> ✅
console.log(isValid("(muñeca) consola bici")) // ✅

console.log(isValid("bici coche (balón bici coche")) // -> ❌
console.log(isValid("peluche (bici [coche) bici coche balón")) // -> ❌
console.log(isValid("(peluche {) bici")) // -> ❌
console.log(isValid("() bici")) // ❌