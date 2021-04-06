/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let preSign = '+';
    const stack = [];
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (!Number.isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + Number(s[i]);
        }
        if (Number.isNaN(Number(s[i])) || i === s.length - 1) {
            switch (preSign) {
            case '+':
                stack.push(num);
                break;
            case '-':
                stack.push(-num);
                break;
            case '*':
                stack.push(stack.pop() * num);
                break;
            default:
                stack.push(stack.pop() / num | 0);
            }
            preSign = s[i];
            num = 0;
        }
    }
    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }
    return sum;
};

var r1 = calculate("14*3/2");
console.log(r1);
// @lc code=end

