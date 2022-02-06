export default function listGifts(letter) {
    var nuevoarray = letter.split(" ")
    var objeto = {}
    for (var i = 0; i < nuevoarray.length; i++) {
        if (nuevoarray[i] !== "" && nuevoarray[i][0] !== "_") {
            if (objeto.hasOwnProperty(nuevoarray[i])) {
                objeto[nuevoarray[i]]++
                } else {
                objeto[nuevoarray[i]] = 1
                }
        }
    }
    return objeto
   }

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/