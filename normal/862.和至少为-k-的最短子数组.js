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
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    let res = A.length + 1;
    let count = 0;
    while (p2 < A.length) {
        while (sum < K && p2 < A.length) {
            if (A[p2] < 0 && p2 > 0) {
                let p3 = p2 - 1;
                let p4 = p1;
                let curSum = sum;
                let curCount = count;
                while ((curSum >= K || curCount > 0) && p4 < p3) {
                    if (curSum >= K) {
                        res = Math.min(res, p3 - p4 + 1);
                    }
                    if (A[p4] < 0) {
                        curCount--;
                    }
                    curSum -= A[p4];
                    p4++;
                }
            }
            A[p2] < 0 && count++;
            sum += A[p2];
            p2++;
        }
        while ((sum >= K || count > 0) && p1 < p2) {
            if (sum >= K) {
                res = Math.min(res, p2 - p1);
            }
            if (A[p1] < 0) {
                count--;
            }
            sum -= A[p1];
            p1++;
        }
    }
    return res === A.length + 1 ? -1 : res;
};

var r1 = shortestSubarray([-36,10,-28,-42,17,83,87,79,51,-26,33,53,63,61,76,34,57,68,1,-30]
    , 484);
console.log(r1);
// @lc code=end

