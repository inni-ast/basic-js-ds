const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    // return this.root ? this.root : null;
    return this.root;
  }

  add(data) {
    this.root = addWithin(this.root, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data)
      }
      return node;
    }

  }

  has(value) {
    return hasWithin(this.root, value);
    function hasWithin(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data ?
        hasWithin(node.left, value) :
        hasWithin(node.right, value);
    }

  }
  find(value) {
    return findNode(this.root, value);
    function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      } else if (value < node.data) {
        return findNode(node.left, value)
      } else if (value > node.data) {
        return findNode(node.right, value);
      } else {
        return node;
      }
    }
  }
  remove(value) {
    this.root = removeNode(this.root, value);
    function removeNode(node, value) {
      if (!node) {
        return null;
      }
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {  // иначе они равны и узел найден, его нужно удалить
        if (!node.left & !node.right) {
          // у узла не потомков и его можно безопасно удалить
          return null;
        }
        // нет левого узла у элемента, запишем вместо удаляемого
        // правый узел
        if (!node.left) {
          node = node.right;
          return node;
        }
        // если нет правого узла, то вместо удаляемого запишем левый
        if (!node.right) {
          node = node.left;
          return node;
        }
        // есть и правый и левый потомок
        // будем искать замену справа (min значение справа)
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }
    let min = this.root;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.root) {
      return null;
    }
    let max = this.root;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }

}
const tree = new BinarySearchTree();
tree.add(1);
tree.add(2);
tree.add(5);
tree.add(20);
tree.add(4);

console.log(tree)
// console.log(tree.root())
module.exports = {
  BinarySearchTree
};
