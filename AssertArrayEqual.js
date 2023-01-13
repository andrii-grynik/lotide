const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

const eqArrays = function (array1, array2) {
  let areEqual = true

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      areEqual = false
    }
  }
  return areEqual
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal "All GooD BoSS!"`)
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal " Do We have A Problem Here??!"`)
  }
}

/* Edge Cases

console.log(eqArrays([1, 2, 3], [1, 2, 3]))
console.log(eqArrays([1, 2, 3], ['1', '2', '3']))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
*/
