/**
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Time O(n) | Space O(1)
 *
 * make 2 passes, first in order,
 * second in reverse, to compute products
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};
