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
    const need = {};
    const have = {};
    for (let char of t) {
        need[char] ? need[char]++ : need[char] = 1;
    }
    let p1 = 0;
    let p2 = 0;
    const isContaint = (have, need) => {
        for (let key in need) {
            if (need[key] > have[key] || !have[key]) {
                return false;
            }
        }
        return true;
    };
    let res = s;
    let flag = false;
    while (p1 <= p2 && p2 < s.length) {
        if (t.includes(s[p2])) {
            have[s[p2]] ? have[s[p2]]++ : have[s[p2]] = 1; 
        }
        while (p1 <= p2 && isContaint(have, need)) {
            if (!t.includes(s[p1])) {
                p1--;
                continue;
            }
            flag = true;
            const curRes = s.substring(p1, p2 + 1);
            res = curRes.length < res.length ? curRes : res; 
            have[s[p1]] && have[s[p1]]--;
            p1++;
            if (!isContaint(have, need)) {
                break;
            }
        }
        p2++;
    }
    return flag ? res : '';
};
var r1 = minWindow("ab", "aa");
console.log(r1);

// @lc code=end

