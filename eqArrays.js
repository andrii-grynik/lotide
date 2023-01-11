const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('fail')
  } else {
    console.log('Pass')
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


//Edge Cases
//console.log(eqArrays([1, 2, 3], [1, 2, 3]))
//console.log(eqArrays([1, 2, 3], ['1', '2', '3']))

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => should PASS
