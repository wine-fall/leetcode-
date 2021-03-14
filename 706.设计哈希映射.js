/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.hash = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for (let i = 0; i < this.hash.length; i++) {
        const [curKey, curValue] = this.hash[i];
        if (curKey === key) {
            this.hash[i][1] = value;
            return;
        }
    }
    this.hash.push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for (let i = 0; i < this.hash.length; i++) {
        const [curKey, curValue] = this.hash[i];
        if (curKey === key) {
            return curValue;
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    for (let i = 0; i < this.hash.length; i++) {
        const [curKey, value] = this.hash[i];
        if (curKey === key) {
            this.hash.splice(i, 1);
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
var obj = new MyHashMap();
obj.put(1, 1);
obj.put(2, 2);
var r1 = obj.get(1);
var r2 = obj.get(3);
obj.put(2, 1);
var param_2 = obj.get(2);
obj.remove(2);
var param_3 = obj.get(2);

console.log(param_2);
console.log(param_3);
// @lc code=end

