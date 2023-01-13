const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`< (o_O) (o_O) (o_O) > Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`< (T_T) (T_T) (T_T) > Assertion Failed: ${actual} !== ${expected}`)
  }
}

const countLetters = function (string) {
  const letterCount = {}

  for (const char of string) {
    if (char !== ' ') {
      if (letterCount[char]) {
        letterCount[char] += 1
      } else {
        letterCount[char] = 1
      }
    }
  }
  return letterCount
}

// Edge Case
// console.log(countLetters("Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers."))
