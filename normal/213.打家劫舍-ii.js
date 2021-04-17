/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const m = nums.length;
    if (m  === 1) {
        return nums[0];
    }
    if (m === 2) {
        return Math.max(nums[0], nums[1]);
    }
    var robWay = function(s, e) {
        const temp = nums.slice(s, e + 1);
        const dp = Array(m - 1);
        dp[0] = temp[0];
        dp[1] = Math.max(temp[0], temp[1]);
        for (let i = 2; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + temp[i]);
        }
        return dp[dp.length- 1];
    };
    return Math.max(robWay(1, m - 1), robWay(0, m - 2));
};

var r1 = rob([1,2,3,1]);
console.log(r1);
// @lc code=end

