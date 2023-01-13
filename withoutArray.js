const eqArrays = function (array1, array2) {
  let areEqual = true

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      areEqual = false
    }
  }
  return areEqual
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal "All GooD BoSS!"`)
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal " Do We have A Problem Here??!"`)
  }
}

// adding without assigment 
const without = function (source, itemsToRemove) {
  const modifiedArray = []

  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true
      }
    }
    if (!shouldRemove) {
      modifiedArray.push(source[i])
      shouldRemove = false
    }
  }
  return modifiedArray
}


/*Edge Cases
const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse'])
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])

console.log(without([1, 2, 3], [1]))
console.log(without(['1', '2', '3'], [1, 2, '3']))
*/
