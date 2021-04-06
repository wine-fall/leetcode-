/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let wordsSet = new Set(words)
  let res = 0
  for (let word of words) {
    for (let i=1; i<word.length; i++) {
      let cur = word.substring(i)
      if (wordsSet.has(cur)) {
        wordsSet.delete(cur)
      }
    }
  }
  for (let item of wordsSet) {
    res += item.length+1
  }
  return res
};
minimumLengthEncoding(["time", "me", "bell"])
// @lc code=end

