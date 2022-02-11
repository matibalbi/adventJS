function pangram(letter) {
    var arr = []
    for (var i = 0; i < letter.length; i++) {
        var char = letter[i].toLowerCase()
        if (char !== "ñ") {
            char = char.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) continue
        }
        if (!arr.includes(char)) arr.push(char)
    }
    return arr.length === 27
}

const str = "Crèmeáñ Brulée"
console.log(str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false