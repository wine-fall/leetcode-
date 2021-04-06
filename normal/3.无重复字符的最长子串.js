/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let start = 0;
  let max = 0;
  for ( let i=0 ; i<s.length ; i++) {
    if (map.has(s[i])) {
      start = Math.max(start, map.get(s[i])+1)
    }
    map.set(s[i], i)
    max = Math.max(max, i-start+1)
  }
  return max
};
lengthOfLongestSubstring("tmmzuxt")
// @lc code=end

