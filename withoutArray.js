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

// adding middle assigment
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

/* Edge Cases
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


const words = [1, 2, 3]
middle(words, ['2'])
assertArraysEqual(words, [1, 2, 3])
*/
