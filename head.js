const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}


function head(array) {
  return array[0]

}


//Edge Cases
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");



