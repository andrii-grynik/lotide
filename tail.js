const assertEqual = require('./assertEqual')

function tail (array) {
  console.log('Array', array)
  return array.slice(1)
}

module.export = tail;
