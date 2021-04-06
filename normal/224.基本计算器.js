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
    let sign = 1;
    const stack = [1];
    let i = 0;
    let res = 0;
    while (i < s.length) {
        if (s[i] === '(') {
            stack.push(sign);
            i++;
        } else if (s[i] === ')') {
            stack.pop();
            i++;
        } else if (s[i] === '+') {
            sign = stack[stack.length - 1];
            i++;
        } else if (s[i] === '-') {
            sign = -stack[stack.length - 1];
            i++;
        } else if (s[i] === ' ') {
            i++;
        } else {
            let num = 0;
            while (i < s.length && s[i] !== ' ' && !isNaN(Number(s[i]))) {
                num = num * 10 + Number(s[i]);
                i++;
            }
            res += sign * num;
        }
    }
    return res;
};

var r1 = calculate("212 + 3");
console.log(r1);
// @lc code=end

