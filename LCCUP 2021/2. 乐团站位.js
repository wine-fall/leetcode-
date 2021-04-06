/**
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
var orchestraLayout = function(num, xPos, yPos) {
    let l = 0;
    let r = num - 1;
    let t = 0;
    let b = num - 1;
    let count = 1;
    const matrix = Array(num).fill(0).map(() => Array(num));
    while (true) {
        for (let i = l; i <= r; i++) {
            matrix[t][i] = count % 9 === 0 ? 9 : count % 9;
            count++;
        }
        if (++t > b) {
            break;
        }
        for (let i = t; i <= b; i++) {
            matrix[i][r] = count % 9 === 0 ? 9 : count % 9;
            count++;
        }
        if (--r < l) {
            break;
        }
        for (let i = r; i >= l; i--) {
            matrix[b][i] = count % 9 === 0 ? 9 : count % 9;
            count++;
        }
        if (--b < t) {
            break;
        }
        for (let i = b; i >= t; i--) {
            matrix[i][l] = count % 9 === 0 ? 9 : count % 9;
            count++;
        }
        if (++l > r) {
            break;
        }
        if (matrix[xPos][yPos]){
            return matrix[xPos][yPos];
        }
    }
    return matrix[xPos][yPos];
};

var r1 = orchestraLayout(12, 2, 6);
console.log(r1);