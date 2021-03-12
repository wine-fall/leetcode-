/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const map = {};
    for (let ticket of tickets) {
        const [u, v] = ticket;
        map[u] ? map[u].push(v) : map[u] = [v];
    }
    for (let key in map) {
        map[key].sort();
    }
    const res = [];
    const dfs = node => {
        const nextNodes = map[node];
        while (nextNodes && nextNodes.length) {
            const next = nextNodes.shift();
            dfs(next);
        }
        res.unshift(node);
    };
    dfs('JFK');
    return res;
};

var r1 = findItinerary([
    ["JFK","SFO"],
    ["JFK","ATL"],
    ["SFO","ATL"],
    ["ATL","JFK"],
    ["ATL","SFO"]
]);
console.log(r1);
// @lc code=end

