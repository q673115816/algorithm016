/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = []
    let curr = root
    while (curr) {
        let last = curr.left
        if (last) {
            while (last.right && last.right !== curr) {
                last = last.right
            }
            if (last.right) {
                last.right = null
                // result.push(curr.val) // 中序
                curr = curr.right
            } else {
                last.right = curr
                result.push(curr.val) // 前序
                curr = curr.left
            }
        } else {
            result.push(curr.val)
            curr = curr.right
        }
    }
    return result
};
// @lc code=end

