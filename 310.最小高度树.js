/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const degree = Array(n).fill(0);
    for (let i = 0; i < edges; i++) {
        const [u, v] = edges[i];
        degree[u]++;
        degree[v]++;
    }
    
};

var r1 = findMinHeightTrees(
    6,
    [[3,0],[3,1],[3,2],[3,4],[5,4]]
);

console.log(r1);
// @lc code=end

