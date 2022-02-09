function canReconfigure(from, to) {
    if (from.length !== to.length) return false
    var arrfrom = []
    var arrto = []
    var arrjoin = []
    for (var i = 0; i < from.length; i++) {
        if (arrfrom.includes(from[i]) || arrto.includes(to[i])) {
            if (!arrjoin.includes(from[i] + to[i])) return false
        }
        arrfrom.push(from[i])
        arrto.push(to[i])
        arrjoin.push(from[i] + to[i])
    }
    return true
}

var from = 'BAL'
var to   = 'LIB'
console.log(canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

var from = 'CON'
var to   = 'JUU'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

var from = 'XBOX'
var to   = 'XXBO'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

var from = 'XBOX'
var to   = 'XOBX'
console.log(canReconfigure(from, to)) // true

var from = 'MMM'
var to   = 'MID'
console.log(canReconfigure(from, to)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

var from = 'AA'
var to   = 'MID'
console.log(canReconfigure(from, to)) // false -> no tiene la misma longitud