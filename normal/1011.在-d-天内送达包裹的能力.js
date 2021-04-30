/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let l = Math.max(...weights);
    let r = 0;
    for (let w of weights) {
        r += w;
    }
    const checkMid = mid => {
        let c = 0;
        let p = 0;
        let curSum = 0;
        while (p < weights.length) {
            curSum += weights[p];
            if (curSum > mid) {
                c++;
                curSum = 0;
                continue;
            }
            p++;
        }
        if (curSum <= mid) {
            c += 1;
        }
        return c;
    };
    while (l < r) {
        const mid = (l + r) / 2 | 0;
        const c = checkMid(mid);
        if (c <= D) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

var r1 = shipWithinDays([147,73,265,305,191,152,192,293,309,292,182,157,381,287,73,162,313,366,346,47]
    ,10);
console.log(r1);
// @lc code=end

