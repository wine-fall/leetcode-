/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = Array(numCourses).fill(0);
    const adjs = {};
    for (let prerequisite of prerequisites) {
        const [targetCourse, preCourse] = prerequisite;
        inDegree[targetCourse]
            ? inDegree[targetCourse]++
            : inDegree[targetCourse] = 1;
        adjs[preCourse]
            ? adjs[preCourse].push(targetCourse)
            : adjs[preCourse] = [targetCourse];
    }
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
        inDegree[i] === 0 && queue.push(i);
    }
    const res = [];
    while (queue.length) {
        const course = queue.shift();
        res.push(course);
        const courseArr = adjs[course] || [];
        for (let i = 0; i < courseArr.length; i++) {
            inDegree[courseArr[i]]--;
            if (inDegree[courseArr[i]] === 0) {
                queue.push(courseArr[i]);
            }
        }
    }
    return res.length === numCourses ? res : [];
};

var r1 = findOrder(
    4, [[1,0],[2,0],[3,1],[3,2]]
);
console.log(r1);
// @lc code=end

