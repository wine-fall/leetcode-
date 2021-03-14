/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    let maxRatio = 0;
    const getRation = arr => {
        return arr.reduce((pre, cur) => {
            const [pass, total] = cur;
            return pre += (pass / total);
        }, 0) / arr.length;
    };
    const dfs = (count) => {
        const curRation = getRation(classes);
        if (curRation > maxRatio) {
            maxRatio = curRation;
        }
        if (count <= 0) {
            return;
        }
        
        for (let i = 0; i < classes.length; i++) {
            classes[i][0]++;
            classes[i][1]++;
            dfs(count - 1);
            classes[i][0]--;
            classes[i][1]--;
        }
    };
    dfs(extraStudents);
    return maxRatio;
};

var r1 = maxAverageRatio([[195,311],[291,602],[904,997],[512,867],[518,964],[403,604],[36,874],[249,492],[762,817],[414,425]]
    ,10);
console.log(r1);