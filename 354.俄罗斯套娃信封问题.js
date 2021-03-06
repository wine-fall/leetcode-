/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }
    
    const n = envelopes.length;
    envelopes.sort((e1, e2) => {
        if (e1[0] - e2[0]) {
            return e1[0] - e2[0];
        } else {
            return e2[1] - e1[1];
        }
    });

    const f = [envelopes[0][1]];
    for (let i = 1; i < n; ++i) {
        const num = envelopes[i][1];
        if (num > f[f.length - 1]) {
            f.push(num);
        } else {
            const index = binarySearch(f, num);
            f[index] = num;
        }
    }
    return f.length;
};

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

var r1 = maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]);
console.log(r1);
// @lc code=end

