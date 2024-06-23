/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Time O(n) | Space O(n)
 *
 * hash map to count occurrences of each value,
 * bucket sort
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const bucket = [];
  const result = [];

  nums.forEach((num) => {
    const val = map.get(num) || 0;
    map.set(num, val + 1);
  });

  for (let [num, freq] of map) {
    bucket[freq] = [...(bucket[freq] || []), num];
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) return result;
  }
};
