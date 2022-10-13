const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {

  let el = null;
  while (l && l.value === k) {
    el = l.value;
    l = l.next;
  }
  let current = l;
  while (current.next) {
    if (current.next.value === k) {
      el = current.next;
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return l;
}

console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3))

module.exports = {
  removeKFromList
};
