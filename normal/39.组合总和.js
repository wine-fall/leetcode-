/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const map = new Map();
    const dfs = (start, path, val) => {
        if (val > target) {
            return;
        }
        if (val === target) {
            path.sort((a, b) => a - b);
            if (!map.has([...path].toString())) {
                res.push([...path]);
                map.set([...path].toString(), true);
            }
        }
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(i, path, val + candidates[i]);
            path.pop();
        }
    };
    dfs(0, [], 0);
    return res;
};

var r1 = combinationSum([2,3,5],8);
console.log(r1);
// @lc code=end

