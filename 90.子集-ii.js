/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const map = {};
    const visited = {};
    const dfs = (start, path) => {
        if (map[[...path].sort((a, b) => a - b)]) {
            return;
        }
        map[[...path].sort((a, b) => a - b)] = true;
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (visited[i]) {
                continue;
            }
            visited[i] = true;
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
            visited[i] = false;
        }
    };
    dfs(0, []);
    return res;
};

var r1 = subsetsWithDup([4,4,4,1,4]);
console.log(r1);
// @lc code=end

