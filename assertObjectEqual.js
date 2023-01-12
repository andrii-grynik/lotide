const eqArrays = function (array1, array2) {
  let areEqual = true

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      areEqual = false
    }
  }
  return areEqual
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (const key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (!object1[key] === object2[key]) {
      return false
    }
  }
  return true
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`)
  }
}

/* Edge Cases

assertObjectsEqual(eqObjects([1, 2, 3], [1, 2, 3]), true) // => true

const ab = { a: '1', b: '2' }
const ba = { b: '2', a: '1' }
// //eqObjects(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3' }
// //eqObjects(ab, abc); // => false
*/
