/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Time O(n) | Space O(n)
 *
 * hashset to get unique values in array,
 * to check for duplicates easily
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};
