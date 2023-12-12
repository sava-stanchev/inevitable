/**
 * https://leetcode.com/problems/two-sum/
 *
 * Time O(n) | Space O(n)
 *
 * use hash map to instantly check for difference value,
 * map will add index of last occurrence of a num,
 * don't use same element twice
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
