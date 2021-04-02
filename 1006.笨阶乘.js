/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    const nums = Array(N).fill(0).map((item, index) => index + 1);
    let cur = N;
    let res = 0;
    let addSum = 0;
    let j = 1;
    for (let i = N - 2; i >= 0; i--) {
        const num = nums[i];
        const signNum = j % 4;
        switch(signNum) {
        case 1:
            cur = cur * num;
            break;
        case 2:
            cur = cur / num | 0;
            break;
        case 3:
            addSum += num;
            break;
        default:
            j === 4 ? res = cur : res -= cur;
            cur = nums[i];
        }
        j++;
    }
    return N <= 4 ? cur + addSum : res - cur + addSum;
};

var r1 = clumsy(3);
console.log(r1);
// @lc code=end

