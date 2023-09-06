/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Time O(n^2) | Space O(n)
 * O(n^2) because JS doesn't have a deque data structure and I'm using an array as a queue.
 * Calling Array.shift() takes O(n).
 *
 * iterative bfs, add prev level which doesn't have any nulls to the result
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let level = [];

    for (let i = queue.length - 1; i >= 0; i--) {
      let node = queue.shift();

      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    if (level.length) {
      res.push(level);
    }
  }

  return res;
};
