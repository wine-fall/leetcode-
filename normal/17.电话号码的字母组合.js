/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        1: [''],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    const res = [];
    const dfs = (s, path) => {
        if (s === digits.length && path.length === digits.length) {
            res.push(path);
            return;
        }
        for (let i = s; i < digits.length; i++) {
            const c = digits[i];
            for (let char of map[c]) {
                dfs(i + 1, path + char);
            }
        }
    };
    dfs(0, '');
    return res;
};

var r1 = letterCombinations('2');
console.log(r1);
// @lc code=end

