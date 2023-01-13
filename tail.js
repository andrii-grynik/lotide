const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

function tail (array) {
  console.log('Array', array)
  return array.slice(1)
}

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
