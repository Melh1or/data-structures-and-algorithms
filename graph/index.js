function createNode(key) {
  const neighbors = []

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node)
    }
  }
}

function createGraph(directed = false) {
  const nodes = []
  const edges = []

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key))
    },
    getNode(key) {
      return nodes.find(node => node.key === key)
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key)
      const node2 = this.getNode(node2key)

      node1.addNeighbor(node2)
      edges.push(`${node1key}-${node2key}`)

      if (!directed) {
        node2.addNeighbor(node1)
      }
    },
    print() {
      return nodes
        .map(({key, neighbors}) => {
          let result = key

          if (neighbors.length) {
            result += ` -> ${neighbors.map(neighbor => neighbor.key).join(' ')}`
          }

          return result
        })
        .join('\n')
    }
  }
}

const g = createGraph(true)

g.addNode('Me')
g.addNode('Mom')
g.addNode('Dad')
g.addNode('Cat')

g.addEdge('Dad', 'Mom')
g.addEdge('Mom', 'Dad')

g.addEdge('Dad', 'Me')
g.addEdge('Mom', 'Me')

g.addEdge('Me', 'Mom')
g.addEdge('Me', 'Dad')

g.addEdge('Dad', 'Cat')

console.log(g.print())
