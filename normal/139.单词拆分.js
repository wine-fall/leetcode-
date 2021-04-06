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
    const queue = [0];
    const visited = {};
    while (queue.length) {
        const start = queue.shift();
        if (visited[start]) {
            continue;
        }
        visited[start] = true;
        for (let i = start; i < s.length; i++) {
            const char = s.slice(start, i + 1);
            if (wordDict.includes(char)) {
                if (i === s.length - 1) {
                    return true;
                } else {
                    queue.push(i + 1);
                }
            }
        }
    }
    return false;
};

var r1 = wordBreak("leetcode", ["leet", "code", "a"]);
console.log(r1);
// @lc code=end

