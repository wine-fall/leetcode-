/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
function ListNode (key, value) { // 定义带键值对的双向链表, 开头为最新使用的应用（与上面的方法不同）
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}
  
function LRUCache (capacity) { // 链表是执行顺序， hash表是内存
    this.capacity = capacity;
    this.hashTable = {}; // 用对象模拟hash表
    this.dummyHead = new ListNode(0, 0);
    this.dummyTail = new ListNode(0, 0);
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.count = 0;
}
  
LRUCache.prototype.get = function(key) {
    const node = this.hashTable[key];
    if (node == null) { return -1; }
    this.moveToHead(node);
    return node.value;
};

LRUCache.prototype.moveToHead = function(node) {
    this.deleteNode(node);
    this.addToHead(node);
};
  
LRUCache.prototype.deleteNode = function(node) {
    const tempNext = node.next;
    const tempPrev = node.prev;
    tempPrev.next = tempNext;
    tempNext.prev = tempPrev;
};
  
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
};

LRUCache.prototype.removeLRUItem = function() {
    const tail = this.popTail();
    delete this.hashTable[tail.key];
    this.count--;
};
  
LRUCache.prototype.put = function(key, value) {
    const node = this.hashTable[key];
    if (node == null) {
        if (this.count == this.capacity) {
            this.removeLRUItem();
        }
        let newNode = new ListNode(key, value);
        this.hashTable[key] = newNode;
        this.addToHead(newNode);
        this.count++;
    } else {
        node.value = value;
        this.moveToHead(node);
    }
};
  
LRUCache.prototype.popTail = function() {
    const tail = this.dummyTail.prev;
    this.deleteNode(tail);
    return tail;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

