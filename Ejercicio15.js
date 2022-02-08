function checkSledJump(heights) {
    var max = Math.max(...heights)
    var foundmax = false
    for (var i = 0; i < heights.length; i++) {
        if (!foundmax) {
            if (heights[i] === max) {
                foundmax = true
                if (i === 0 || i === heights.length - 1) return false
            }
            else if (heights[i] <= heights[i - 1]) return false
        }
        else if (heights[i] >= heights[i - 1]) return false
    }
    return true
}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!