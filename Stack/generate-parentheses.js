/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Time O(2^N) | Space O(2^N)
 *
 * dfs backtracking
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const stack = [];
  const result = [];

  const backtrack = (openedCount, closedCount) => {
    if (stack.length === n * 2) {
      result.push(stack.join(""));
      return;
    }

    if (openedCount < n) {
      stack.push("(");
      backtrack(openedCount + 1, closedCount);
      stack.pop();
    }

    if (closedCount < openedCount) {
      stack.push(")");
      backtrack(openedCount, closedCount + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return result;
};
