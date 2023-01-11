const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log('fail')
  } else {
    console.log('Pass')
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

// Console log for testing if needed.

// console.log(countLetters("Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers."))
