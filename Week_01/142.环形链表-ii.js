/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 快慢指针
var detectCycle = function (head) {
    let slow = head
    let fast = head
    while(fast && fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) {
            fast = head
            while(fast !== slow) {
                fast = fast.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
};
// var detectCycle = function (head) {
//     let hash = new Set
//     while (head) {
//         if (hash.has(head)) return head
//         hash.add(head)
//         head = head.next
//     }
//     return null
// };
// var detectCycle = function(head) {
//     while(head) {
//         if(head.c) return head
//         head.c = true
//         head = head.next
//     }
//     return null
// };
// @lc code=end

