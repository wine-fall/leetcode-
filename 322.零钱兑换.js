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
  let dp = Array(amount+1).fill(amount+1);
  dp[0] = 0;
  for (let i=1 ;i<dp.length; i++) {
    coins.forEach((coin)=>{
      if (coin > i) { return; }
      dp[i] = Math.min(dp[i], dp[i-coin]+1);
    });
  }
  return dp[amount] === amount+1 ? -1 : dp[amount];
};
// @lc code=end

