/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length;
    nums = [1, ...nums, 1];
    const dp = Array(n + 2).fill(0)
        .map(() => Array(n + 2).fill(0));
    for (let i = n; i >=0; i--) {
        for (let j = i + 1; j < n + 2; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j]
                );
            }
        }
    }
    return dp[0][n + 1];
};

var r1 = maxCoins([1,5]);
console.log(r1);
// @lc code=end

