const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

const middle = function (array) {
  const returnArray = []

  if (array.length > 2) {
    const middle = array.length / 2 - 1
    if (array.length % 2 !== 0) {
      returnArray.push((array[Math.ceil(middle)]))
    } else {
      returnArray.push(array[middle], array[middle + 1])
    }
    return returnArray
  } else {
    return []
  }
}

module.export = middle; 
