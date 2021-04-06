/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((p1, p2) => {
        if (p1[0] !== p2[0]) {
            return p1[0] - p2[0];
        } else {
            return p2[1] - p1[1];
        }
    });
    const indexies = [];
    for (let i = 0; i < people.length; i++) {
        indexies[i] = i;
    }
    const res = Array(people.length);
    for (let p of people) {
        const index = indexies[p[1]];
        res[index] = p;
        indexies.splice(p[1], 1);
    }
    return res;
};

var r1 = reconstructQueue(
    [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
);
console.log(r1);
// @lc code=end

