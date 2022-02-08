function fixFiles(files) {
    var obj = {}
    for (var i = 0; i < files.length; i++) {
        if (obj.hasOwnProperty(files[i])) {
            obj[files[i]]++
            obj[files[i] + "(" + obj[files[i]] + ")"] = 0
        }
        else obj[files[i]] = 0
    }
    return Object.keys(obj)
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']