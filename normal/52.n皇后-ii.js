/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const cols = {};
    const dials1 = {};
    const dials2 = {};
    let count = 0;
    const helper = row => {
        if (row === n) {
            count++;
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!cols[i] && !dials1[i + row] && !dials2[i - row]) {
                cols[i] = true;
                dials1[i + row] = true;
                dials2[i - row] = true;
                helper(row + 1);
                cols[i] = false;
                dials1[i + row] = false;
                dials2[i - row] = false;
            }
        }
    };
    helper(0);
    return count;
};

var r1 = totalNQueens(1);
console.log(r1);
// @lc code=end

