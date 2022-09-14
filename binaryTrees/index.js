function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const leftNode = createBinaryNode(leftKey)
      this.left = leftNode
      return leftNode
    },
    addRight(rightKey) {
      const rightNode = createBinaryNode(rightKey)
      this.right = rightNode
      return rightNode
    }
  }
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn)
      visitFn(node)
      TRAVERSALS.IN_ORDER(node.right, visitFn)
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node)
      TRAVERSALS.IN_ORDER(node.left, visitFn)
      TRAVERSALS.IN_ORDER(node.right, visitFn)
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn)
      TRAVERSALS.IN_ORDER(node.right, visitFn)
      visitFn(node)
    }
  },
}

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey)

  return {
    root,
    print(traversalType = 'IN_ORDER') {
      let result = ''

      const visit = node => {
        result += result.length === 0
          ? node.key
          : ` => ${node.key}`
      }

      TRAVERSALS[traversalType](this.root, visit)

      return result
    }
  }
}

const tree = createBinaryTree('a')
const b = tree.root.addLeft('b')
const c = tree.root.addRight('c')
const d = b.addLeft('d')
const e = b.addRight('e')
const h = d.addLeft('h')
const i = d.addRight('i')
const f = c.addLeft('f')
const g = c.addRight('g')

console.log(tree.print('POST_ORDER'))
