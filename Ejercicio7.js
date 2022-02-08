function contains(store, product) {     // función recursiva
    for (var key in store) {
        if (!store.hasOwnProperty(key)) continue
        if (typeof store[key] !== 'object') {
            if (store[key] === product) return true
        } else if (contains(store[key], product)) return true
    }
    return false
}

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }

console.log(contains(almacen, 'camiseta')) // true

const otroAlmacen = {
'baul': {
    'fondo': {
    'objeto': 'cd-rom',
    'otro-objeto': 'disquette',
    'otra-cosa': 'mando'
    }
}
}

console.log(contains(otroAlmacen, 'gameboy')) // false