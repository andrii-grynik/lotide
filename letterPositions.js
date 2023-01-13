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

const letterPositions = function (string) {
  const results = {}
  let i = 0

  for (const char of string) {
    if (char !== ' ') {
      if (!results[char]) {
        results[char] = [i]
      } else {
        results[char].push(i)
      }
    }
    i++
  }
  return results
}


/* Edge Cases

assertArraysEqual(letterPositions('hello').h, [0])
assertArraysEqual(letterPositions('hello').e, [1])
assertArraysEqual(letterPositions('hello').l, [2, 3])
assertArraysEqual(letterPositions('hello').o, [4])
*/
