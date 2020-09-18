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
// stack
var preorderTraversal = function (root) {
    if (!root) return []
    let stack = [root]
    let result = []
    let node
    while (stack.length) {
        node = stack.pop()
        if (node) {
            result.push(node.val)
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
        }
    }
    return result
};
// 递归
// var preorderTraversal = function(root) {
//     let result = []
//     dp(root, result)
//     function dp(node, result) {
//         if(!node) return 
//         result.push(node.val)
//         if(node.left) dp(node.left, result)
//         if(node.right) dp(node.right, result)
//     }
//     return result
// };
// @lc code=end

