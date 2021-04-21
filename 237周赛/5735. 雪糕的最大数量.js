/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs = costs.sort((a, b) => a - b);
    let c = 0;
    let sum = 0;
    for (let cost of costs) {
        sum += cost;
        if (sum > coins) {
            break;
        }
        c++;
    }
    return c;
};