/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const _map = {};
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        _map[v] ? _map[v]++ : _map[v] = 1;
        _map[u] ? _map[u]++ : _map[u] = 1;
    }
    let maxCount = -Number.MAX_SAFE_INTEGER;
    let center = null;
    for (let key in _map) {
        if (_map[key] > maxCount) {
            maxCount = _map[key];
            center = Number(key);
        }
    }
    return center;
};

var r1 = findCenter([[1,2],[5,1],[1,3],[1,4]]);
console.log(r1);