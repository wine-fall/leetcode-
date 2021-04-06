/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let stack1=[];
  let stack2=[];
  while (l1) {
    stack1.push(l1.val);;
    l1=l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2=l2.next;
  }
  let carry = 0;
  let head = null
  while (stack1.length || stack2.length || carry>0) {
    let sum = carry;
    sum+=stack1.length ? stack1.pop() : 0;
    sum+=stack2.length ? stack2.pop() : 0;
    let node = new ListNode( sum%10 )
    node.next=head
    head=node
    carry = Math.floor(sum/10)
  }
  return head
};
// @lc code=end

