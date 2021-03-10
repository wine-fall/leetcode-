/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [1];
    let sign = 1;
    let i = 0;
    let res = 0;
    while (i < s.length) {
        const char = s[i];
        if (char === ' ') {
            i++;
        } else if (char === '+') {
            sign = stack[stack.length - 1];
            i++;
        } else if (char === '-') {
            sign = -stack[stack.length - 1];
            i++;
        } else if (char === '(') {
            stack.push(sign);
            i++;
        } else if (char === ')') {
            stack.pop();
            i++;
        } else {
            let num = 0;
            while (
                s[i] < s.length
                && !Number.isNaN(s[i])
                && s[i] !== ' '
            ) {
                num = num * 10 + Number(s[i]);
                i++;
            }
            res += sign * num;
        }
    }
    return res;
};

var r1 = calculate("212");
console.log(r1);
// @lc code=end

