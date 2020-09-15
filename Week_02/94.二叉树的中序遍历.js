/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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

var inorderTraversal = function (root) {
    let stack = []
    let result = []
    let node = root
    while(stack.length || node) {
        if(node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            result.push(node.val)
            node = node.right
        }
    }
    return result
};
// var inorderTraversal = function (root) {
//     if (!root) return []
//     let stack = []
//     let result = []
//     let node
//     stack.push(root)
//     while (stack.length) {
//         node = stack.pop()
//         if(node && node.val) {
//             if(node.right) stack.push(node.right)
//             stack.push(node.val)
//             if(node.left) stack.push(node.left)
//         } else {
//             result.push(node)
//         }
//     }
//     return result
// };
// 递归
// var inorderTraversal = function (root) {
//     let result = []
//     dp(root, result)
//     return result
//     function dp(node, result) {
//         if (!node || !node.val) return
//         if (node.left) dp(node.left, result)
//         result.push(node.val)
//         if (node.right) dp(node.right, result)
//     }
// };

// @lc code=end

