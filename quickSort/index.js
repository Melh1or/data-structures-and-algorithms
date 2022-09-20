function quickSort(array = []) {
  if (array.length < 2) {
    return array
  }

  const pivotIndex = array.length - 1
  const pivot = array[pivotIndex]

  const left = []
  const right = []

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i]
    currentItem < pivot
      ? left.push(currentItem)
      : right.push(currentItem)
  }

  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]
}

const numbers = [10, 2, 4, 5, 1, 5, 5, 7]

console.log(quickSort(numbers))
