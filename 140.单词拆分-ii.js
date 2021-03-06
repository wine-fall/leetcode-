/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const helper = start => {
        if (start > s.length - 1) {
            return [[]];
        }
        const res = [];
        for (let i = start + 1; i <= s.length; i++) {
            const sCur = s.substring(start, i);
            const sentence = [sCur];
            if (wordDict.includes(sCur)) {
                const restWords = helper(i);
                for (let restWord of restWords) {
                    res.push(sentence.concat(restWord));
                }
            }
        }
        return res;
    };
    return helper(0).map(words => words.join(' '));
};

var r1 = wordBreak(
    "catsanddog",
    ["cat","cats","and","sand","dog"]
);
console.log(r1);
// @lc code=end

