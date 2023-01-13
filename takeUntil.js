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

const takeUntil = function (array, callback) {
  let results = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i)
      return results
    }
  }
  return results
}


/* Edge Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]
const results1 = takeUntil(data1, x => x < 0)
console.log(results1)

console.log('***')

const data2 = ["I've", 'been', 'to', 'Grand Canyon', ',', "I've", 'been', 'to', 'Big  Sur']
const results2 = takeUntil(data2, x => x === ',')
console.log(results2)

const data3 = ['I', 'will go', 'with', 'this', ',', 'You', 'will go', ',', 'with', 'that']
const results3 = takeUntil(data3, x => x === ',')
console.log(results3)

assertArraysEqual(results1, data1.slice(0, 5))
assertArraysEqual(results2, data2.slice(0, 4))
assertArraysEqual(results3, ['I', 'will go', 'with', 'this'])
*/
