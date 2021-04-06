/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const need = {};
    const have = {};
    for (let char of p) {
        need[char] ? need[char]++ : need[char] = 1;
    }
    let p1 = 0;
    let p2 = 0;
    let count = 0;
    const res = [];
    while (p2 < s.length) {
        const cur = s[p2];
        if (need[cur]) {
            have[cur] ? have[cur]++ : have[cur] = 1;
            have[cur] === need[cur] && count++;
            (have[cur] !== need[cur] && count > 0) && count--;
        }
        if (p2 - p1 === p.length - 1) {
            if (count === Object.keys(need).length) {
                res.push(p1);
            }
            const start = s[p1];
            if (need[start]) {
                have[start]--;
                have[start] === need[start] && count++;
                (have[start] !== need[start] && count > 0) && count--;
            }
            p1++;
        }
        p2++;
    }
    return res;
};

var r1 = findAnagrams("cbaebabacd", "abc");
console.log(r1);
// @lc code=end

