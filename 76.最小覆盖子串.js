/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const stack = [];
    let p1 = 0;
    let p2 = 0;
    let res = s;
    const isTarget = (p1, p2) => {
        const stack = [];
        for (let char of s.substring(p1, p2 + 1)) {
            !stack.includes(char) && t.includes(char) && stack.push(char);
        }
        return stack.length === t.length;
    };
    
    while (p1 <= p2) {
        if (!isTarget(p1, p2)) {
            res = s.substring(p1, p2 + 1).length < res.length
                ? s.substring(p1, p2 + 1)
                : res;
            p2++;
        } else {
            p1++;
        }
    }
    
    return res;
};
const res = minWindow("ADOBECODEBANC", "ABC");
console.log(res);

// @lc code=end

