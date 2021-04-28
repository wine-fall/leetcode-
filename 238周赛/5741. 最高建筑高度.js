/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    const map = new Map();
    for (let [id, maxHeight] of restrictions) {
        map.set(id, maxHeight);
    }
    const res = Array(n);
    const helper = (s, e) => {
        if (s > e) {
            return;
        }
        if (s === 0) {
            res[s] = 0;
        }
        if (e === n - 1 && s === n - 2) {
            res[e] = 
        }
    };
};

var r1 = maxBuilding(10
    ,[[8,5],[9,0],[6,2],[4,0],[3,2],[10,0],[5,3],[7,3],[2,4]]);
console.log(r1);