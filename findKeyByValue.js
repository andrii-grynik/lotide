const assertEqual = require('./assertEqual')


const findKeyByValue = function (object, value) {
  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
}

module.export = findKeyByValue;

/* Test Case

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
*/
