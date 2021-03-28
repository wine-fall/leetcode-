/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = Array(n + 1).fill(0).map((item, index) => index);
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; i - j * j >= 0; j++) {
            dp[i] = Math.min(
                dp[i],
                dp[i - j * j] + 1
            );
        }
    }
    return dp.pop();
};
var r1 = numSquares(12);
console.log(r1);
// @lc code=end

