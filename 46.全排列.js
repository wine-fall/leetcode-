/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res=[], path=[]
  backTrace(nums, res, path)
  return res
};
var backTrace = function(nums,res,path) {
  if (nums.length === path.length) {
    res.push([...path])
  }
  for ( let i=0 ; i < nums.length ; i++ ) {
    if (path.include(nums[i])) { continue }
    path.push(nums[i])
    backTrace(nums,res,path)
    path.pop()
  }
}
// @lc code=end

