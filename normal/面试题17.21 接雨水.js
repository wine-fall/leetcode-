/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length
            && height[stack[stack.length - 1]] < height[i]
        ) {
            const cur = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack.length ? stack[stack.length - 1] : 0;
            const len = i - left - 1;
            water += len * (Math.min(height[left], height[i]) - height[cur]);
        }
        stack.push(i);
    }
    return water;
};

var r1 = trap([]);
console.log(r1);