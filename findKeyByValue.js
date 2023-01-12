const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('fail')
  } else {
    console.log('Pass')
  }
}

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



//Edge Cases

//assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama')
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
