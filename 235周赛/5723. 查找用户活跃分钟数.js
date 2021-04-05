/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const map = {};
    for (let [ID, time] of logs) {
        if ((map[ID] || []).includes(time)) {
            continue;
        }
        map[ID] ? map[ID].push(time) : map[ID] = [time];
    }
    const arr = {};
    for (let key in map) {
        const len = map[key].length;
        arr[len] ? arr[len]++ : arr[len] = 1;
    }
    const res = Array(k).fill(0);
    for (let key in arr) {
        res[key - 1] = arr[key];
    }
    return res;
};

var r1 = findingUsersActiveMinutes([[1,1],[2,2],[2,3]], 4);
console.log(r1);