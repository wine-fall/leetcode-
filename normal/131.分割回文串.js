/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function(s, start, i, memo) {
    while (start < i) {
        if (s[start] !== s[i]) {
            memo[start][i] = false;
            return false;
        }
        start++;
        i--;
    }
    memo[start][i] = true;
    return true;
};

var partition = function(s) {
    const res = [];
    const memo = Array(s.length);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = Array(s.length);
    }
    const dfs = (start, curRes) => {
        if (start > s.length - 1) {
            res.push([...curRes]);
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (memo[start][i] === false) {
                continue;
            }
            if (isPalindrome(s, start, i, memo)) {
                curRes.push(s.substring(start, i + 1));
                dfs(i + 1, curRes);
                curRes.pop();
            }
        }
    };
    dfs(0, []);
    return res;
};

var r1 = partition("aab");
console.log(r1);
// @lc code=end

