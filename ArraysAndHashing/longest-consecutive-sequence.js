/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Time O(n) | Space O(n)
 *
 * add each num to hash set,
 * for each num if num - 1 doesn't exist,
 * count the consecutive nums after num,
 * ie num + 1
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currLongest = 0;

      while (set.has(num + currLongest)) {
        currLongest++;
      }

      longest = Math.max(longest, currLongest);
    }
  }

  return longest;
};
