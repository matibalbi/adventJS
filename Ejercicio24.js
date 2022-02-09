function checkIsSameTree(treeA, treeB) {        // función recursiva
    var decorations = 0
    for (var key in treeA) {
        if (!treeA.hasOwnProperty(key)) continue
        if (typeof treeA[key] !== 'object') {
            if (treeA[key] !== treeB[key]) return false
        } else if (!checkIsSameTree(treeA[key], treeB[key])) return false
    }
    return true
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}
  
console.log(checkIsSameTree(tree, tree)) // true
  
const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}
  
console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true

console.log(JSON.stringify(tree))