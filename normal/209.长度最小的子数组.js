/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    let res = nums.length + 1;
    while (nums[p2]) {
        while (sum < target && nums[p2]) {
            sum += nums[p2];
            p2++;
        }
        while (sum >= target) {
            sum -= nums[p1];
            res = Math.min(res, p2 - p1);
            p1++;
        }
    }
    return res === nums.length + 1 ? 0 : res;
};

var r1 = minSubArrayLen(92, [1,4,4]);
console.log(r1);
// @lc code=end

