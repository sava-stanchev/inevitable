/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * Time O(n) | Space O(h)
 * h = height of the tree
 *
 * preorder traversal, recursive dfs
 *
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  function dfs(root, maxVal) {
    if (!root) return 0;

    let res = root.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, root.val);
    res += dfs(root.left, maxVal);
    res += dfs(root.right, maxVal);
    return res;
  }

  return dfs(root, root.val);
};
