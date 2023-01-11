const eqArrays = function (array1, array2) {
  let areEqual = true

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false
    }
  }
  return areEqual
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal :)`)
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal :(`)
  }
}

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

module.exports = without

const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse'])
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])

without([1, 2, 3], [1])
without(['1', '2', '3'], [1, 2, '3'])
