const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')


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

module.export - eqObjects;

/* Test

const kl = { k: '1', l: '2' }
const lk = { l: '2', k: '1' }
assertEqual(eqObjects(kl, lk), true)

const jkl = { j: '1', k: '2', l: '3' }
assertEqual(eqObjects(kl, jkl), false)
*/
