const assertEqual = require('./assertEqual')


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

module.export = countLetters;

// Test
// console.log(countLetters("Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers."))
