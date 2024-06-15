/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Time O(N) | Space O(N)
 *
 * push opening brace on stack,
 * pop if matching close brace,
 * at end if stack empty, return true
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    if (char in map) {
      if (stack && stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};
