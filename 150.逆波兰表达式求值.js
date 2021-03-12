/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [Number(tokens[0]), Number(tokens[1])];
    for (let i = 2; i < tokens.length; i++) {
        const char = tokens[i];
        if (!Number.isNaN(Number(char))) {
            stack.push(Number(char));
        } else {
            const n1 = stack.pop();
            const n2 = stack.pop();
            let num;
            if (char === '+') {
                num = n2 + n1;
            } else if (char === '-') {
                num = n2 - n1;
            } else if (char === '*') {
                num = n2 * n1;
            } else if (char === '/') {
                const flag = n2 / n1 < 0 ? -1 : 1;
                num = flag * Math.floor(Math.abs(n2 / n1));
            }
            stack.push(num);
        }
    }
    return stack[0];
};

var r1 = evalRPN(["4","-2","/","2","-3","-","-"]);

console.log(r1);
// @lc code=end

