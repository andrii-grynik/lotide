const eqArrays = function(array1, array2) {
  let areEqual = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      areEqual = false;
    }
  }
  return areEqual;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`${array1} === ${array2}\nThese arrays are equal :)`);
  } else {
    console.log(`${array1} !== ${array2}\nThese arrays are not equal :(`);
  }
};

module.exports = assertArraysEqual;

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], ["1", "2", "3"]));