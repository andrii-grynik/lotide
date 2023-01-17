const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function (string) {
  const results = {}
  let i = 0

  for (const char of string) {
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i]
      } else {
        results[char].push(i)
      }
    }
    i++
  }
  return results
}

module.export = letterPositions;

/* Test Case

assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').l, [2, 3])
assertArraysEqual(letterPositions('hello').o, [4])
*/
