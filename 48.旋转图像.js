/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let row of matrix) {
        let p1 = 0;
        let p2 = row.length - 1;
        while (p1 < p2) {
            [row[p1], row[p2]] = [row[p2], row[p1]];
            p1++;
            p2--;
        }
    }
    return matrix;
};

var r1 = rotate([
    [5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]
]);
console.log(r1);
// @lc code=end

