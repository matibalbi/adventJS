function countDecorations(bigTree) {        // función recursiva
    var decorations = 0
    for (var key in bigTree) {
        if (!bigTree.hasOwnProperty(key)) continue
        if (typeof bigTree[key] !== 'object') {
            if (bigTree[key] !== null) decorations = bigTree[key]
        } else decorations += countDecorations(bigTree[key])
    }
    return decorations
}

// otra opción:

// function countDecorations(bigTree) {
//     const stack = [bigTree];
//     let sum = 0;
//     while(stack.length > 0) {
//       const { value, left, right } = stack.pop();
//       sum += value;
//       if(left) {
//         stack.push(left);
//       }
//       if(right) {
//         stack.push(right);
//       }
//     }
//     return sum;
// }

// tenemos el árbol en forma de objeto
const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
      value: 2, // el nodo izquierdo necesita dos decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    },
    right: {
      value: 3, // el nodo de la derecha necesita tres decoraciones
      left: null, // no tiene más ramas
      right: null // no tiene más ramas
    }
  }
  
  /* Gráficamente sería así:
      1
    /   \
   2     3
  
  1 + 2 + 3 = 6
  */
  
 console.log(countDecorations(tree)) // 6
  
  const bigTree = {
    value: 1,
    left: {
      value: 5,
      left: {
        value: 7,
        left: {
          value: 3,
          left: null,
          right: null
        },
        right: null
      },
      right: null
    },
    right: {
      value: 6,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 1,
        left: null,
        right: null
      }
    }
  }
  
  /*
          1
        /   \
       5     6
      /     / \
     7     5   1
    /
   3
  */
  
   console.log(countDecorations(bigTree)) // 28