/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    const map = {};
    map[0] = -1;
    const keys = [0];
    let sum = 0;
    let res = A.length + 1;
    const visited = {};
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        for (let k = 0; k < keys.length; k++) {
            const key = keys[k];
            if (sum - key < K) {
                break;
            }
            res = Math.min(res, i - map[key]);
        }
        if (!visited[sum]) {
            visited[sum] = true;
            const n = keys.length;
            for (let j = 0; j < n; j++) {
                if (keys[keys.length - 1] <= sum) {
                    keys.push(sum);
                    break;
                }
                if (keys[j] >= sum) {
                    keys.splice(j, 0, sum);
                    break;
                }
            }
        }
        if (map[sum] != null) {
            map[sum] = Math.max(i, map[sum]);
        } else {
            map[sum] = i;
        }
    }
    return res === A.length + 1 ? -1 : res;
};

var r1 = shortestSubarray([-36,10,-28,-42,17,83,87,79,51,-26,33,53,63,61,76,34,57,68,1,-30]
    , 484);
console.log(r1);
// @lc code=end

