function wrapGifts(gifts) {
    if (gifts === []) return []
    var arr = []
    var ancho = gifts[0].length + 2
    var alto = gifts.length + 2
    for (var j = 0; j < alto; j++) {
        if (j === 0 || j === alto - 1) {
            for (var i = 0; i < ancho; i++) {
                if (arr[j]) arr[j] += "*"
                else arr[j] = "*"
            }
            continue
        }
        arr[j] = "*" + gifts[j - 1] + "*"
    }
    return arr
}

console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/