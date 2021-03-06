/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0, maxDistance = 0
  for (let i=0; i<nums.length; i++) {
    maxDistance = Math.max(maxDistance, nums[i]+i)
    i = maxDistance
    step++
    if (maxDistance >= nums.length-1) { break }
  }
  return step
};
jump([1,2,3])
// @lc code=end

