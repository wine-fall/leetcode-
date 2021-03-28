/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 1; i < amount + 1; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    const res = dp[amount];
    return res === Number.MAX_VALUE ? -1 : res;
};

var r1 = coinChange([357,239,73,52], 9832);
console.log(r1);
// @lc code=end

