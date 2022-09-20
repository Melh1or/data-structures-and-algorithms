function mergeSort(array = []) {
  if (array.length < 2) {
    return array
  }

  const middle = Math.floor(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left = [], right = []) {
  const sorted = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  const result = [...sorted, ...left, ...right]

  return result
}

const numbers = [10, 2, 4, 5, 1, 5, 5, 7]

console.log(mergeSort(numbers))
