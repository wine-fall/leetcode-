/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
    if (!matrix.length) {
        this.dp = [];
        return;
    }
    const row = matrix.length;
    const col = matrix[0].length;
    const dp = Array(row).fill([]);
    dp[0][0] = matrix[0][0];
    for (let i = 0; i < dp.length; i++) {
        if (i === 0) {
            for (let j = 1; j < col; j++) {
                dp[i][j] = matrix[i][j] + dp[i][j - 1];
            }
        } else {
            dp[i] = [matrix[i][0] + dp[i - 1][0]];
        }
    }
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = matrix[i][j] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
        }
    }
    this.dp = dp;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const dp = this.dp;
    if (!dp.length) {
        return;
    }
    if (row1 === row2 && col1 === col2) {
        return this.matrix[row1][col1];
    }
    const space1 = (row1 > 0 && col1 > 0) ? dp[row1 - 1][col1 - 1] : 0;
    const space2 = row1 > 0 ? dp[row1 - 1][col2] : 0;
    const space3 = col1 > 0 ? dp[row2][col1 - 1] : 0;
    return dp[row2][col2] + space1 - space2 - space3;
};

var obj = new NumMatrix([
    [8,-4,5],
    [-1,4,4],
    [-2,3,1],
    [-4,4,3]
]);

var r1 = obj.sumRegion(1, 1, 1, 2);

console.log(r1);
// console.log(r2);
// console.log(r3);

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// @lc code=end

