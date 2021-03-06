/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = new Map()
  for (let char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char)+1)
    } else {
      map.set(char, 1)
    }
  }
  let left = right = start = 0, minLen = Infinity
  let type = map.size
  while (right<s.length) {
    let curR = s[right]
    if (map.get(curR)>0) {
      map.set(curR, map.get(curR)-1)
    }
    if (map.get(curR) === 0) { type-- }
    while (type === 0 ) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        start = left
      }
      let curL = s[left]
      if (map.has(curL)) {
        map.set(curL, map.get(curL)+1)
        type++
      }
      left++
    }
    right++
  }
  return s.substr(start, minLen)
};
const res = minWindow("ADOBECODEBANC", "ABC")
console.log(res);

// @lc code=end

