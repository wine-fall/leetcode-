/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = Array(s.length).fill(0).map(() => []);
    let flag = false;
    const dfs = (start) => {
        if (start > s.length - 1) {
            flag = true;
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (memo[start][i + 1] != null) {
                return memo[start][i + 1];
            }
            const char = s.slice(start, i + 1);
            if (wordDict.includes(char)) {
                memo[start][i + 1] = true;
                dfs(i + 1);
            } else {
                memo[start][i + 1] = false;
            }
        }
        return;
    };
    dfs(0);
    return flag;
};

var r1 = wordBreak("leetcode", ["leet", "code", "a"]);
console.log(r1);
// @lc code=end

