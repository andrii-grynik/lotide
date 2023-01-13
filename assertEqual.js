const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`) 
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

//Edge Cases
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
