/*
  Binary Search Tree implementation
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    // func that searches for a valid position and adds the new node
    const searchTree = function (node) {
      if (data < node.data) {
        // if the node to the left is empty, add the node there
        if (node.left === null) {
          node.left = new Node(data);
          return;

          // if it´s not empty, keep searching down the tree until we find an empty one
        } else return searchTree(node.left);
      } else if (data > node.data) {
        // if the node to the right is empty, add the node there
        if (node.right === null) {
          node.right = new Node(data);
          return;

          // if it´s not empty, keep searching down the tree until we find an empty one
        } else return searchTree(node.right);
      } else return null;
    };

    // if this is the first node we add, then we just create a new node at the root position
    if (node === null) {
      this.root = new Node(data);
      return;

      // if not, we use the helper function to find a position
    } else return searchTree(node);
  }

  // the node with the smallest node is the last one to the left
  findMin() {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    // returns the last node at the bottom left
    return current.data;
  }

  // the node with the biggest data is the last one to the right
  findMax() {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    // returns the last node at the bottom right
    return current.data;
  }

  isPresent(data) {
    let current = this.root;

    while (current !== null) {
      if (data === current.data) return true;

      if (data < current.data) current = current.left;
      else current = current.right;
    }

    // if we make it out of the while loop, we got to the bottom of the tree without finding the data, so it's not there
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) return null;

      if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) return null;

        // node only has a right child node
        if (node.left === null) return node.right;

        // node only has a left child node
        if (node.right === null) return node.left;

        // node has two children

        // we get the first node to the right
        let tmpNode = node.right;

        // then we get the node at the bottom left from here
        while (tmpNode.left !== null) {
          tmpNode = node.left;
        }

        // we replace the node we're going to remove with the node at the bottom left of it's right node
        node.data = tmpNode.data;

        // we call this same function on the node to the right to set up references on that "branch"
        node.right = removeNode(node.right, tmpNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
}
