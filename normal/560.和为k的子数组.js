/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let pre = Array(nums.length+1).fill(0)
  let count = 0
  for (let i=1; i<nums.length; i++) {
    pre[i] = pre[i-1] + nums[i-1]
  }
  for (let i=1; i<nums.length+1; i++) {
    for (let j=i; j<nums.length+1; j++) {
      if (pre[j]-pre[i-1] === k) {
        count++
      }
    }
  }
  return count
};
subarraySum([1,1,1])
// @lc code=end

