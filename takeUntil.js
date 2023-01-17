const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


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

module.export = takeUntil;

/* Test  Case

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
