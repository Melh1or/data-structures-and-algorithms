function createStack() {
  const array = []

  return {
    push(item) {
      array.push(item)
    },
    pop() {
      return array.pop()
    },
    peek() {
      return array[array.length - 1]
    },
    get length() {
      return array.length
    },
    isEmpty() {
      return array.length === 0
    }
  }
}

const s1 = createStack()

s1.push(1)
s1.push(2)
s1.push(3)

s1.pop() // 3
s1.pop() // 2

s1.length // 1
