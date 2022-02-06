export default function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    for (var i = 0; i < game.length; i++) {
      for (var j = 0; j < game[i].length; j++) {
        if (game[i][j] === "m") {
          switch (direction) {
            case "up":
              if (i === 0 || game[i - 1][j] !== "*") return false
              else return true
            case "down":
              if (i === game.length - 1 || game[i + 1][j] !== "*") return false
              else return true
            case "left":
              if (j === 0 || game[i][j - 1] !== "*") return false
              else return true
            case "right":
              if (j === game[i].length - 1 || game[i][j + 1] !== "*") return false
              else return true
          }
        }
      }
    }
}

    const game = [
      [' ', ' ', ' '],
      [' ', ' ', 'm'],
      [' ', ' ', '*']
    ]
    
    console.log(canMouseEat('up',    game))   // false
    console.log(canMouseEat('down',  game))   // true
    console.log(canMouseEat('right', game))   // false
    console.log( canMouseEat('left',  game))   // false
    
    const game2 = [
      ['*', ' ', ' ', ' '],
      [' ', 'm', '*', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', '*']
    ]
    
    console.log(canMouseEat('up',    game2))   // false
    console.log(canMouseEat('down',  game2))   // false
    console.log( canMouseEat('right', game2))   // true
    console.log(canMouseEat('left',  game2))   // false