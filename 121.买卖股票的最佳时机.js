/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let dp_i_0=0, dp_i_1=Number.MIN_SAFE_INTEGER
  for (let i=0; i<prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
};
// @lc code=end

