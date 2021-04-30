/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l = 0;
    let r = c;
    while (l <= r) {
        const cur = l * l + r * r;
        if (cur === c) {
            return true;
        } else {
            const mid = (l + r) / 2 | 0;
            
        }
    }
    return false;
};

var r1 = judgeSquareSum(4);
console.log(r1);
// @lc code=end

