/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    const res = [];
    for (let i = 0; i <= num; i++) {
        const strI = i.toString(2);
        const curRes = strI.replace(/0/g, '');
        res.push(curRes.length);
    }
    return res;
};
var r1 = countBits(5);
console.log(r1);
// @lc code=end

