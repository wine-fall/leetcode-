/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = 0
  for (let num of A) {
    sum += num
  }
  let left = 0, right = A.length-1
  let lSum = A[left], rSum = A[right]
  while (left+1 < right) {
    if (lSum === sum%3 && rSum === sum%3) { return true }
    if (lSum !== sum%3) {
      left++
      lSum += A[left]
    }
    if (rSum !== sum%3) {
      right--
      rSum += A[right]
    }
  }
  return false
};
canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])
// @lc code=end

