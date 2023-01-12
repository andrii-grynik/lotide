const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('Fail')
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

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (const key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    } else if (!object1[key] === object2[key]) {
      return false
    }
  }
  return true
}

// Edge Cases

//const kl = { k: '1', l: '2' }
//const lk = { l: '2', k: '1' }
//assertEqual(eqObjects(kl, lk), true)

//const jkl = { j: '1', k: '2', l: '3' }
//assertEqual(eqObjects(kl, jkl), false)


