function createXmasTree(height) {
    var tree = ""
    for (var j = 0; j < height + 2; j++) {
        for (var i = 1 ; i <= height * 2 - 1; i++) {
            if (j >= height) {
                if (i === height) tree += "#"
                else tree += "_"
                continue
            }
            if (i >= height - j && i <= height + j) tree += "*"
            else tree += "_"
        }
        if (j !== height + 1) tree += "\n"
    }
    return tree
  }

//   ____*____ altura 5
//   ___***___
//   __*****__
//   _*******_
//   *********
//   ____#____
//   ____#____

// __*__ altura 3
// _***_
// *****
// __#__
// __#__