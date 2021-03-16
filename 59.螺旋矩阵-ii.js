/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const matrix = Array(n).fill(0).map(() => []);
    let l = 0;
    let t = 0;
    let r = n - 1;
    let b = n - 1;
    let num = 1;
    while (true) {
        for (let i = l; i <= r; i++) {
            matrix[t][i] = num;
            num++;
        }
        if (++t > b) {
            break;
        }
        for (let i = t; i <= b; i++) {
            matrix[i][r] = num;
            num++;
        }
        if (--r < l) {
            break;
        }
        for (let i = r; i >= l; i--) {
            matrix[b][i] = num;
            num++;
        }
        if (--b < t) {
            break;
        }
        for (let i = b; i >= t; i--) {
            matrix[i][l] = num;
            num++;
        }
        if (++l > r) {
            break;
        }
    }
    return matrix;
};

var r1 = generateMatrix(1);
console.log(r1);
// @lc code=end

