/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Time O(n) | Space O(h)
 * h = height of the tree
 *
 * iterative in-order traversal, check each val is greater than prev
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function valid(node, left, right) {
    if (!node) return true;
    if (!(node.val < right && node.val > left)) return false;

    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  }

  return valid(root, (min = -Infinity), (max = Infinity));
};
