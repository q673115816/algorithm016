/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1) {
        return l2
    } else if (!l2) {
        return l1
    } else if(l1.val > l2.val) {
        // 较小的节点截断再接上后续比较的结果
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
};
// @lc code=end

