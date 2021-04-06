/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()
  let res = []
  let slow = fast = s.length-1
  while (s[fast]) {
    while (s[fast] !== " " && s[fast]) {
      fast--
    }
    let cur = s.substring(fast+1, slow+1)
    res.push(cur)
    while (s[fast] === " ") {
      fast--
    }
    slow = fast
  }
  return res.join(" ")
};
reverseWords(" the sky is blue ")
// @lc code=end

