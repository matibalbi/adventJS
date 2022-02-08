function pangram(letter) {
    arr = []
    for (var i = 0; i < letter.length; i++) {
        var char = letter[i].toLowerCase()
        if ((char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) && char !== "ñ") continue
        if (char === "á" || char === "ä") char = "a"
        if (char === "é" || char === "ë") char = "e"
        if (char === "í" || char === "ï") char = "i"
        if (char === "ó" || char === "ö") char = "o"
        if (char === "ú" || char === "ü") char = "u"
        if (!arr.includes(char)) arr.push(char)
    }
    return arr.length === 27
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false