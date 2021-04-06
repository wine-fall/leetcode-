/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (char !== stack[stack.length - 1]) {
            stack.push(char);
            continue;
        }
        while (stack.length) {
            if (char === stack[stack.length - 1]) {
                stack.pop();
            } else {
                break;
            }
        }
    }
    return stack.join('');
};

var r1 = removeDuplicates("abbaca");

console.log(r1);
// @lc code=end

