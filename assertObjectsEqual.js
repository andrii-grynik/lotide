const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}

module.export = assertObjectsEqual;

/* Test Case

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true) // => true
const ab = { a: '1', b: '2' }
const ba = { b: '2', a: '1' }

assertObjectsEqual(eqObjects(ab, ba), true)

const abc = { a: '1', b: '2', c: '3' }

assertObjectsEqual(eqObjects(ab, abc), false)
*/
