/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums.length) { return 0 }
  let dp = Array(nums.length).fill(1)
  for (let i=1; i<dp.length; i++) {
    for (let j=0; j<i; j++) {
      if (nums[j]<nums[i]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  let res = dp.reduce((pre,cur)=>{
    return Math.max(pre,cur)
  },Number.MIN_SAFE_INTEGER)
  return res
};
lengthOfLIS([-2,-1])
// @lc code=end

