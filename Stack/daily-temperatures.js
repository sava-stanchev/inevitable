/**
 * https://leetcode.com/problems/daily-temperatures/
 *
 * Time O(N) | Space O(N)
 *
 * stack of temperature indexes,
 * pop stack if curr temperature is greater
 * than the one indexed at top of stack
 * push to result index difference (num of days)
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let stackInd = stack.pop();
      res[stackInd] = i - stackInd;
    }

    stack.push(i);
  }

  return res;
};
