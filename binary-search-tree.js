class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val)

    if (!this.root) {
      this.root = newNode
    } else {
      let curr = this.root
      while(curr) {
        if (val === curr.val) return this
        if (val < curr.val) {
          if (curr.left) {
            curr = curr.left
          } else {
            curr.left = newNode
          }
        }
        if (val > curr.val) {
          if (curr.right) {
            curr = curr.right
          } else {
            curr.right = newNode
          }
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    let newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    }
    if (val === node.val) return this
    if (val < node.val) {
      if(node.left) {
        this.insertRecursively(val, node.left)
      } else {
        node.left = newNode
        return this
      } 
    }
    if (val > node.val) {
      if(node.right) {
        this.insertRecursively(val, node.right)
      } else {
        node.right = newNode
        return this
      } 
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined
    
    let curr = this.root
    while(curr) {
      if (val < curr.val) {
        curr = curr.left
      } else if (val > curr.val) {
        curr = curr.right
      } else {
        return curr
      }    
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!this.root) return undefined
    if (val === node.val) return node
    if (val < node.val && node.left) return this.findRecursively(val, node.left)
    if (val > node.val && node.right) return this.findRecursively(val, node.right)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    visited.push(node.val)
    if(node.left) this.dfsPreOrder(node.left, visited)
    if(node.right) this.dfsPreOrder(node.right, visited)
    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if(node.left) this.dfsInOrder(node.left, visited)
    visited.push(node.val)
    if(node.right) this.dfsInOrder(node.right, visited)
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if(node.left) this.dfsPostOrder(node.left, visited)
    if(node.right) this.dfsPostOrder(node.right, visited)
    visited.push(node.val)
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = []
    let q = [this.root]
    while (q.length) {
      let curr = q.shift()
      visited.push(curr.val)
      if(curr.left) q.push(curr.left)
      if(curr.right) q.push(curr.right)
    }
    return visited
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, node = this.root) {
    if (!this.root) return undefined
    if (node.left && node.left.val === val) {
      let toRemove = node.left
      if (toRemove.right && toRemove.left) {
        node.left = toRemove.right
        node.left.left = toRemove.left
      }
      if (!toRemove.left && toRemove.right) {
        node.left = toRemove.right
      } 
      if (!toRemove.right && toRemove.left) {
        node.left = toRemove.left
      } 
      if (!toRemove.right && !toRemove.left) node.left = null
      return toRemove
    } 
    if (node.right && node.right.val === val) {
      let toRemove = node.right
      if (toRemove.left && toRemove.right) {
        node.right = toRemove.left
        node.right.right = toRemove.right
      }
      if (!toRemove.left && toRemove.right) {
        node.right = toRemove.right
      } 
      if (!toRemove.right && toRemove.left) {
        node.right = toRemove.left
      } 
      if (!toRemove.right && !toRemove.left) node.right = null
      return toRemove
    } 
    if (node.left && val < node.val) return this.remove(val, node.left)
    if (node.right && val > node.val) return this.remove(val, node.right)
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
