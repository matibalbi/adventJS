function countPackages(carriers, carrierID) {       // función recursiva
    var suma = 0
    for (var i = 0; i < carriers.length; i++) {
        if (carriers[i][0] === carrierID) {
            suma = carriers[i][1]
            if (carriers[i][2] !== []) {
                for (var j = 0; j < carriers[i][2].length; j++) {
                    suma += countPackages(carriers, carriers[i][2][j])
                }
            }
        }
    }
    return suma
}

const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
  ]
  
console.log(countPackages(carriers, 'dapelu')) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
['lolivier', 8, ['camila', 'jesuspoleo']],
['camila', 5, ['sergiomartinez', 'conchaasensio']],
['jesuspoleo', 4, []],
['sergiomartinez', 4, []],
['conchaasensio', 3, ['facundocapua', 'faviola']],
['facundocapua', 2, []],
['faviola', 1, []]
]

console.log(countPackages(carriers2, 'camila')) // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15