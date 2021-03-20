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
    let node = this.hashTable[key];
    if (node == null) { return -1; }
    this.deleteNode(node);
    this.addToHead(node);
    return node.value;
};
  
LRUCache.prototype.deleteNode = function(node) {
    let tempNext = node.next;
    let tempPrev = node.prev;
    tempPrev.next = tempNext;
    tempNext.prev = tempPrev;
};
  
LRUCache.prototype.addToHead = function(node) {
    node.prev = this.dummyHead;
    node.next = this.dummyHead.next;
    this.dummyHead.next.prev = node;
    this.dummyHead.next = node;
};
  
LRUCache.prototype.put = function(key, value) {
    let node = this.hashTable[key];
    if ( node == null) {
        let newNode = new ListNode(key, value);
        this.hashTable[key] = newNode;
        this.addToHead(newNode);
        this.count++;
        if (this.count > this.capacity) {
            this.deleteLast();
            this.addToHead(newNode);
        }
    } else {
        node.value = value;
        this.deleteNode(node);
        this.addToHead(node);
    }
};
  
LRUCache.prototype.deleteLast = function() {
    let lastNode = this.dummyTail.prev;
    this.deleteNode(lastNode);
    delete this.hashTable[lastNode.key];
    this.count--;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

