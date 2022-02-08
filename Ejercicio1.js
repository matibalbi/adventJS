function contarOvejas(ovejas) {
    var nuevoarray = ovejas.filter(function(elemento) {
      if ((elemento.name.includes("a") || elemento.name.includes("A")) && (elemento.name.includes("n") || elemento.name.includes("N")) && elemento.color === "rojo") {
          return elemento
      }
    })
    return nuevoarray
  }

  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]