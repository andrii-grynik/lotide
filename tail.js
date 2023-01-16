const assertEqual = require('./assertEqual')

function tail (array) {
  console.log('Array', array)
  return array.slice(1)
}

module.export = tail;


/* Edge Cases

const result = tail(['Hello', 'Lighthouse', 'Labs'])
assertEqual(result.length, 2) // ensure we get back two elements
assertEqual(result[0], 'Lighthouse') // ensure first element is "Lighthouse"
assertEqual(result[1], 'Labs')

const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words)
assertEqual(words.length, 3)

const oneElement = tail(['Hello'])
assertEqual(oneElement.length, 0)
const anotherElement = tail([])
assertEqual(anotherElement.length, 0)
*/
