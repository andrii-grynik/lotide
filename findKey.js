const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

const findKey = function (object, callback) {
  const keysArr = Object.keys(object)
  for (let i = 0; i < keysArr.length; i++) {
    //for debugger in case we need to break down to each parameter value: console.log(keysArr[i], callback(object[keysArr[i]]), object[keysArr[i]].stars);
    if (callback(object[keysArr[i]])) {
      return keysArr[i]
    }
  }
  return undefined
}


/*
findKey({
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
}, x => x.stars === 2) // => "noma"

const object = {
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
}
const actual1 = findKey(object, x => x.stars === 2)
const expected1 = 'noma'
assertEqual(actual1, expected1)

const actual2 = findKey(object, x => x.stars > 1)
const expected2 = 'Akaleri'
assertEqual(actual2, expected2)

const actual3 = findKey(object, x => x.stars === 99)
let expected3
assertEqual(actual3, expected3)

assertEqual(findKey({
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
}, x => x.stars === 1), 'Blue Hill')
*/
