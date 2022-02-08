export default function getMinJump(obstacles) {
    for (var i = 2; true; i++) {
        var minjump = true
        for (var j = 0; j < obstacles.length; j++) {
            if (obstacles[j] % i === 0) {
                minjump = false
                break
            }
        }
        if (minjump) return i
    }
}

const obstacles = [5, 3, 6, 7, 9]
console.log(getMinJump(obstacles)) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles2 = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles2)) // -> 7

// Así quedaría la representación:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// .  .  X  .  X  .  X  .  X  .  X 
// S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

console.log(getMinJump([1, 2, 3, 5])) // -> 4
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([9, 5, 1])) // -> 2