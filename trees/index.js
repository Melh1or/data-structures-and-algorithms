function createNode(key) {
  const children = []
  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey)
      children.push(childNode)
      return childNode
    }
  }
}

function createTree(rootKey) {
  const root = createNode(rootKey)

  return {
    root,
    print() {
      let result = ''

      function traverse(node, visitFn, depth) {
        visitFn(node, depth)

        if (node.children.length) {
          node.children.forEach(child => {
            traverse(child, visitFn, depth + 1)
          })
        }
      }

      function addKeysToResult(node, depth) {
        result += result.length === 0
          ? node.key
          : `\n${' '.repeat(depth * 2)}${node.key}`
      }

      traverse(root, addKeysToResult, 1)

      return result
    }
  }
}

const dom = createTree('html')

const head = dom.root.addChild('head')
const body = dom.root.addChild('body')
const title = head.addChild('title')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')
const h1 = header.addChild('h1')
const p = header.addChild('p')

console.log(dom.print())
