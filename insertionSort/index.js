function insertionSort(array = []) {
  let i, j

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1)
        array.splice(j, 0, item)
      }
    }
  }

  return array
}

const array = [10, 2, 5, 6,  4, 1, 3, 7, 9, 8]
insertionSort(array)
console.log(array)
