/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 *
 * Time O(n) | Space O(n)
 *
 * iterative dfs in-order and return kth element processed,
 * go left until null, pop, go right once
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    n++;

    if (n === k) return curr.val;
    curr = curr.right;
  }
};
