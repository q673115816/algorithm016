/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// loop
var swapPairs = function (head) {
    let result = new ListNode(-1)
    result.next = head
    let prev = result
    while (prev.next && prev.next.next) {
        let a = prev.next
        let b = a.next
        prev.next = b
        a.next = b.next
        b.next = a
        prev = a
    }
    return result.next
};
// recursion
// var swapPairs = function(head) {
//     if(head === null || head.next === null) return head
//     let nextNode = head.next
//     head.next = swapPairs(head.next.next)
//     nextNode.next = head
//     return nextNode
// };
// @lc code=end

