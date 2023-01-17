const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const words = ['ground', 'control', 'to', 'major', 'tom']
const map = function (array, callback) {
  const results = []
  for (const item of array) {
    results.push(callback(item))
  }
  return results
}

module.export = map;

/* Test Case

const results1 = map(words, word => word[0])
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])

const results2 = map(words, word => word + ' ' + 'test')
assertArraysEqual(results2, ['ground test', 'control test', 'to test', 'major test', 'tom test'])

const results3 = map(words, word => word.length)
assertArraysEqual(results3, [6, 7, 2, 5, 3])

const results4 = map(words, word => word[4])
assertArraysEqual(results4, ['n', 'r', undefined, 'r', undefined])
*/
