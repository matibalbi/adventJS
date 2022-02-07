function getCoins(change) {
    var array = [0, 0, 0, 0, 0, 0]
    var rest = change
    for (var i = coins.length - 1; i >= 0; i--) {
        if (rest >= coins[i]) {
            array[i] = Math.floor(rest / coins[i])
            rest = rest % coins[i]
            if (rest === 0) return array
        }
    }
}

var coins = [1, 2, 5, 10, 20, 50]

// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos