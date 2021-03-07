/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    for (let char of strs) {
        const charKey = char.split('').sort().join('');
        if (!map[charKey]) {
            map[charKey] = [char];
        } else {
            map[charKey].push(char);
        }
    }
    const res = [];
    for (let key in map) {
        res.push(map[key]);
    }
    return res;
};

var r1 = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(r1);
// @lc code=end

