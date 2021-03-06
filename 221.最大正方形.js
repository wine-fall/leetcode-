/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let dp = Array(matrix.length+1).fill(0)
  for (let i=0 ; i<dp.length; i++) {
    if (i===0) {
      dp[i] = Array(matrix.length+1).fill(0)
    } else {
      dp[i] = [0]
    }
  }  
  let max = 0
  for (let i=1; i<dp.length; i++) {
    for (let j=1; j<dp[0].length; j++) {
      if (matrix[i-1][j-1] === "1") {
        dp[i][j] = 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
        max = Math.max(max, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return max*max
};
maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])
// @lc code=end

