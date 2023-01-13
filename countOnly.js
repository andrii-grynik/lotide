const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`) 
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

// adding count only assigment 
const countOnly = function (allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1
      } else {
        results[item] = 1
      }
    }
    console.log(item)
  }
  return results
}

/* Edge Cases
const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
]

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false })

assertEqual(result1.Jason, 1)
assertEqual(result1.Karima, undefined)
assertEqual(result1.Fang, 2)
assertEqual(result1.Agouhanna, undefined)
*/
