/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = nums.length-1;
  while(i>=0) {
    let cur = nums[i];
    if (nums.indexOf(target - cur) > -1) {
      return [i, nums.indexOf(target - cur)];
    }
    i--;
  }   
};
twoSum([2,7,11,15],9);
// @lc code=end

