/*
给你一个整数数组 nums ，和两个整数 limit 与 goal 。数组 nums 有一条重要属性：abs(nums[i]) <= limit 。

返回使数组元素总和等于 goal 所需要向数组中添加的 最少元素数量 ，添加元素 不应改变 数组中 abs(nums[i]) <= limit 这一属性。

注意，如果 x >= 0 ，那么 abs(x) 等于 x ；否则，等于 -x 。

 

示例 1：

输入：nums = [1,-1,1], limit = 3, goal = -4
输出：2
解释：可以将 -2 和 -3 添加到数组中，数组的元素总和变为 1 - 1 + 1 - 2 - 3 = -4 。
示例 2：

输入：nums = [1,-10,9,1], limit = 100, goal = 0
输出：1
*/

/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    const target = Math.abs(goal - sum);
    if (target === 0) {
        return 0;
    }
    let x = 0;
    let rest = 0;
    let curTarget = target - rest;
    let i = limit;
    while (i >= 0) {
        x++;
        rest += i;
        if (rest === target) {
            return x;
        }
        if (curTarget - rest >= limit) {
            continue;
        } else {
            return x + 1;
        }
    }
    return x;
};

var r1 = minElements(
    [5],
    5,
    6
);

console.log(r1);