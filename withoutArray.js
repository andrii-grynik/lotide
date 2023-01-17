const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')



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

module.export = without;

/*Test Case
const words = ['hello', 'world', 'lighthouse']
without(words, ['lighthouse'])
assertArraysEqual(words, ['hello', 'world', 'lighthouse'])

console.log(without([1, 2, 3], [1]))
console.log(without(['1', '2', '3'], [1, 2, '3']))
*/
