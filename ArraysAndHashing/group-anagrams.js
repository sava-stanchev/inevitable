/**
 * https://leetcode.com/problems/group-anagrams/
 *
 * Time O(m*n) | Space O(m*n)
 * m = total number of input strings
 * n = average length of a string
 *
 * for each of 26 chars,
 * use count of each char in each word as array for key in hash map,
 * value is the list of anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();

  for (const str of strs) {
    const frequency = new Array(26).fill(0);

    for (const char of str) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      frequency[charCode]++;
    }

    let keyStr = frequency.toString();
    const values = map.get(keyStr) || [];
    values.push(str);
    map.set(keyStr, values);
  }

  return [...map.values()];
};
