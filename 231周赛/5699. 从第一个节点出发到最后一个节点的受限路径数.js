/*
    description: https://leetcode-cn.com/contest/weekly-contest-231/problems/number-of-restricted-paths-from-first-to-last-node/
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function(n, edges) {
    const distanceToLastNode = x => {
        const map = {};
        for (let i = 0; i < edges.length; i++) {
            const edge = edges[i];
            const [u, v, weight] = edge;
            if (map[u]) {
                map[u].push([v, weight]);
            } else {
                map[u] = [[v, weight]];
            }
        }
        let minDistance = Number.MAX_SAFE_INTEGER;
        if (map[x]) {
            for (let i = 0; i < map[x].length; i++) {
                const cur = map[x][i];
                
            }
        }

    };
};

