function shouldBuyFidelity(times) {
    var normal = 12 * times
    var fidelidad = 250
    for (var i = 1; i <= times; i++) {
        fidelidad += 12 * Math.pow(0.75, i) 
    }
    if (fidelidad < normal) return true
    return false
}

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad