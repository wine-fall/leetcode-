/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = Array(target + 1).fill(0);
    dp[0] = 1;
    nums.sort((a, b) => a - b);
    for (let i = 1; i <= target; i++) {
        for (let n of nums) {
            if (n <= i) {
                dp[i] += dp[i - n];
            }
        }
    }
    return dp[dp.length - 1];
};

var r1 = combinationSum4([1,2,3], 4);
console.log(r1);
// @lc code=end

