/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = strs.sort((a, b) => a.length - b.length);
    const word = strs[0];
    const map = {};
    for (let i = 0; i < word.length; i++) {
        const curSlice = word.slice(0, i + 1);
        map[curSlice] = 1;
    }
    for (let j = 1; j < strs.length; j++) {
        const restWord = strs[j];
        for (let i = 0; i < restWord.length; i++) {
            const curSlice = restWord.slice(0, i + 1);
            map[curSlice] && map[curSlice]++;
        }
    }
    const commons = Object.keys(map).filter(key => map[key] === strs.length);
    commons.sort((a, b) => b.length - a.length);
    return commons[0] || '';
};

var r1 = longestCommonPrefix([]);
console.log(r1);
// @lc code=end

