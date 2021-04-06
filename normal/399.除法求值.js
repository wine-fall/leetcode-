/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const map = {};
    const visit = {};
    for (let i = 0; i < equations.length; i++) {
        const n0 = equations[i][0];
        const n1 = equations[i][1];
        const v = values[i];
        visit[n0] = false;
        visit[n1] = false;
        if (!map[n0]) {
            map[n0] = [[n1, v]];
        } else {
            map[n0].push([n1, v]);
        }
        if (!map[n1]) {
            map[n1] = [[n0, 1 / v]];
        } else {
            map[n1].push([n0, 1 / v]);
        }
    }

    const dfs = (n0, n1) => {
        if (n0 === n1) {
            return 1;
        }
        const curResArr = map[n0];
        for (let i = 0; i < curResArr.length; i++) {
            const curRes = curResArr[i];
            if (!visit[curRes[0]]) {
                visit[curRes[0]] = true;
                const rest = dfs(curRes[0], n1);
                visit[curRes[0]] = false;
                if (rest !== -1) {
                    return curRes[1] * rest;
                }
            }
        }
        return -1;
    };

    const res = [];
    for (let i = 0; i < queries.length; i++) {
        const [n0, n1] = queries[i];
        if (map[n0] && map[n1]) {
            visit[n0] = true;
            res.push(dfs(n0, n1));
            visit[n0] = false;
        } else {
            res.push(-1.0);
        }
    }
    return res;
};

var r1 = calcEquation(
    [["a","b"],["b","c"]],
    [2.0,3.0],
    [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
);

console.log(r1);
// @lc code=end

