/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start=0, end=0
  let maxLen=0
  for (let i=0;i<s.length;i++) {
    let [l1,r1,len1]=centerSpread(s,i,i)
    let [l2,r2,len2]=centerSpread(s,i,i+1)
    let curLen = Math.max(len1,len2)
    if (curLen>maxLen) {
      maxLen = curLen
      start = len1>len2?l1:l2
      end = len1>len2?r1:r2
    }
  }
  return s.slice(start,end+1)
};
var centerSpread = function(s, l, r) {
  let temp = []
  while (l>=0 && r<s.length && s[l]===s[r]) {
    l--
    r++
  }
  temp.push(l+1)
  temp.push(r-1)
  temp.push(r-l-1)
  return temp
}
longestPalindrome("bb")
// @lc code=end

