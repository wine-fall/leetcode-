/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parent = new Array(edges.length + 1).fill(0).map((val, index) => index);
    const find = (node) => {
        return node === parent[node] ? node : find(parent[node]);
    };
    const union = (node1, node2) => {
        if (find(node1) === find(node2)) {
            return;
        }
        parent[find(node1)] = find(node2);
    };
    let res = [];
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        if (find(u) !== find(v)) {
            union(u, v);
        } else {
            res = edges[i];
        }
    }
    return res;
};

var r1 = findRedundantConnection([[1,2], [1,3], [2,3]]);
console.log(r1);
// @lc code=end

