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

const words = ['ground', 'control', 'to', 'major', 'tom']
const map = function (array, callback) {
  const results = []
  for (const item of array) {
    results.push(callback(item))
  }
  return results
}

/* Edge Cases

const results1 = map(words, word => word[0])
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const results2 = map(words, word => word + ' ' + 'test')
assertArraysEqual(results2, ['ground test', 'control test', 'to test', 'major test', 'tom test'])

const results3 = map(words, word => word.length)
assertArraysEqual(results3, [6, 7, 2, 5, 3])

const results4 = map(words, word => word[4])
assertArraysEqual(results4, ['n', 'r', undefined, 'r', undefined])
*/
