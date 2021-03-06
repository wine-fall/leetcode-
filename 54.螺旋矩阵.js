/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let l = 0;
    let r = matrix[0].length - 1;
    let t = 0;
    let b = matrix.length - 1;
    const res = [];
    while (true) {
        for (let i = l; i <= r; i++) {
            res.push(matrix[t][i]);
        }
        if (++t > b) {
            break;
        }
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r]);
        }
        if (--r < l) {
            break;
        }
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i]);
        }
        if (--b < t) {
            break;
        }
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l]);
        }
        if (++l > r) {
            break;
        }
    }
    return res;
};

var r1 = spiralOrder([
    [2,5,8],[4,0,-1]
]);
console.log(r1);
// @lc code=end

