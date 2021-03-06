/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegrees = Array(numCourses).fill(0);
    const map = {};
    for (let i = 0; i < prerequisites.length; i++) {
        inDegrees[prerequisites[i][0]]++;
        if (!map[prerequisites[i][1]]) {
            map[prerequisites[i][1]] = [prerequisites[i][0]];
        } else {
            map[prerequisites[i][1]].push(prerequisites[i][0]);
        }
    }
    const queue = [];
    for (let i = 0; i < inDegrees.length; i++) {
        inDegrees[i] === 0 && queue.push(i);
    }
    let count = 0;
    while(queue.length) {
        const curCourse = queue.shift();
        count++;
        if (map[curCourse] && map[curCourse].length) {
            const dependCourses = map[curCourse];
            for (let dependCourse of dependCourses) {
                inDegrees[dependCourse]--;
                if (inDegrees[dependCourse] === 0) {
                    queue.push(dependCourse);
                }
            }
        }
    }
    return count === numCourses;
};

var r1 = canFinish(
    2,
    [[0, 1]]
);
console.log(r1);
// @lc code=end

