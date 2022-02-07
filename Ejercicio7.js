function contains(store, product) {
    return recursiveObj(store, product)
}

function recursiveObj(obj, val) {
    for (var key in obj) {
        if(!obj.hasOwnProperty(key)) continue
        if (typeof obj[key] !== 'object') {
            if (obj[key] === val) return true
        } else if (recursiveObj(obj[key], val)) return true
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