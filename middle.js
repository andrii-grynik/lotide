const middle = function (array) {
  const returnArray = []

  if (array.length > 2) {
    const middle = array.length / 2 - 1
    if (array.length % 2 !== 0) {
      // console.log(middle);
      returnArray.push((array[Math.ceil(middle)]))
    } else {
      returnArray.push(array[middle], array[middle + 1])
    }
    return returnArray
  } else {
    return []
  }
}

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
